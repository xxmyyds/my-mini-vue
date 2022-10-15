import { h } from '../../dist/my-mini-vue.esm.js'

export const Foo = {
  setup(props, { emit }) {
    let emitAdd = () => {
      console.log('emitAdd')
      emit('add', 1, 2)
      emit('add-foo', 2, 3)
    }

    return { emitAdd }
  },

  render() {
    const btn = h('button', { onClick: this.emitAdd }, 'emitAdd')
    const foo = h('div', {}, 'xxmyyds')
    return h('div', {}, [foo, btn])
  },
}
