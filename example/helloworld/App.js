import { h } from '../../lib/my-mini-vue.esm.js'

window.self = null
export const App = {
  render() {
    window.self = this
    return h(
      'div',
      {
        id: 'root',
        class: ['red', 'blue'],
        onClick() {
          console.log('click')
        },
      },
      'hi' + this.msg
      //   [h('p', { class: 'red' }, 'hi'), h('p', { class: 'blue' }, 'xxm')]
    )
  },
  setup() {
    return {
      msg: 'xxmyyds',
    }
  },
}
