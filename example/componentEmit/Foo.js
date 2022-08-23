import { h } from '../../lib/my-mini-vue.esm.js'

export const Foo = {
  setup(props) {
    let emitAdd = () => {
      console.log('emitAdd')
    }

    return { emitAdd }
  },

  render() {
    const btn = h('button', { onClick: this.emitAdd }, 'emitAdd')
    const foo = h('div', {}, 'xxmyyds')
    return h('div', {}, [foo, btn])
  },
}
