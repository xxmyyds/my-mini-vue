import { NodeTypes } from '../src/ast'
import { baseParse } from '../src/parse'

describe('parse', () => {
  test('simple interpolation', () => {
    const ast = baseParse('{{ message }}')

    expect(ast.children[0]).toStrictEqual({
      type: NodeTypes.INTERPOLATION,
      content: {
        type: NodeTypes.SIMPLE_EXPRESSION,
        content: 'message',
      },
    })
  })

  test('simple element div', () => {
    const ast = baseParse('<div></div>')

    expect(ast.children[0]).toStrictEqual({
      type: NodeTypes.ELEMENT,
      tag: 'div',
    })
  })

  test('text', () => {
    const ast = baseParse('xxmyyds')

    expect(ast.children[0]).toStrictEqual({
      type: NodeTypes.TEXT,
      content: 'xxmyyds',
    })
  })
})
