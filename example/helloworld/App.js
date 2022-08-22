import { h } from '../../lib/my-mini-vue.esm.js'

export const App = {
  render() {
    return h(
      'div',
      {
        id: 'root',
        class: ['red', 'blue'],
      },
      [h('p', { class: 'red' }, 'hi'), h('p', { class: 'blue' }, 'xxm')]
    )
  },
  setup() {
    return {
      msg: 'xxmyyds',
    }
  },
}
