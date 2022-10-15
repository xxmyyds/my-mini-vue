import { h } from '../../dist/my-mini-vue.esm.js'
import { Foo } from './Foo.js'

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
      [
        //   'hi' + this.msg
        //   [h('p', { class: 'red' }, 'hi'), h('p', { class: 'blue' }, 'xxm')]
        h(Foo, { count: 1 }),
      ]
    )
  },
  setup() {
    return {
      msg: 'xxmyyds',
    }
  },
}
