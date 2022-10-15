import { createTextVNode, h } from '../../dist/my-mini-vue.esm.js'
import { Foo } from './Foo.js'

export const App = {
  name: 'App',
  render() {
    return h(
      'div',
      {
        id: 'root',
      },
      // [
      //   h(
      //     Foo,
      //     {},
      //     {
      //       header: ({ count }) => h('p', {}, '123' + count),
      //       footer: () => h('p', {}, '234'),
      //     }
      //   ),
      //   app,
      // ]
      [
        h(
          Foo,
          {},
          {
            default: () => [
              h('p', {}, '123'),
              h('p', {}, '234'),
              createTextVNode('xxmyyds'),
            ],
          }
        ),
      ]
      // [h(Foo, {}, { default: () => h('p', {}, '234') }), app]
    )
  },
  setup() {
    return {
      msg: 'xxmyyds',
    }
  },
}
