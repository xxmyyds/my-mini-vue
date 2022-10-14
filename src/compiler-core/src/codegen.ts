import {
  CREATE_ELEMENT_VNODE,
  helperMapName,
  TO_DISPLAY_STRING,
} from './runtimeHelpers'
import { NodeTypes } from './ast'

export function generate(ast) {
  const context = createCodegenContext()
  const { push } = context

  genFunctionPreamble(ast, context)

  const functionName = 'render'
  const args = ['_ctx', '_cache']
  const signature = args.join(', ')
  push(`function ${functionName}(${signature}){`)

  push('return ')
  genNode(ast.codegenNode, context)
  push('}')
  return {
    code: context.code,
  }
}
function genFunctionPreamble(ast: any, context: any) {
  const { push } = context
  const VueBinging = 'Vue'
  const aliasHelper = (s) => `${helperMapName[s]}: _${helperMapName[s]}`
  if (ast.helpers.length > 0) {
    push(`const { ${ast.helpers.map(aliasHelper).join(', ')} } = ${VueBinging}`)
  }
  push('\n')
  push('return ')
}

function genNode(node: any, context: any) {
  switch (node.type) {
    case NodeTypes.TEXT:
      genText(context, node)
      break
    case NodeTypes.INTERPOLATION:
      genInterpolation(context, node)
      break
    case NodeTypes.SIMPLE_EXPRESSION:
      genExpression(context, node)
      break
    case NodeTypes.ELEMENT:
      genElement(context, node)
      break
    default:
      break
  }
}
function genText(context: any, node: any) {
  const { push } = context
  push(`'${node.content}'`)
}

function genInterpolation(context: any, node: any) {
  const { push, helper } = context
  push(`${helper(TO_DISPLAY_STRING)}(`)
  genNode(node.content, context)
  push(')')
}

function genElement(context, node) {
  const { push, helper } = context
  const { tag, children } = node
  push(`${helper(CREATE_ELEMENT_VNODE)}("${tag}")`)
  for (let i = 0; i < children.length; i++) {
    const child = children[i]

    genNode(child, context)
  }
  push(')')
}

function createCodegenContext() {
  const context = {
    code: '',
    push(source) {
      context.code += source
    },
    helper(key) {
      return `_${helperMapName[key]}`
    },
  }

  return context
}
function genExpression(context: any, node: any) {
  const { push } = context
  push(`${node.content}`)
}
