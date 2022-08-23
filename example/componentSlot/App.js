import { h } from '../../lib/my-mini-vue.esm.js'
import { Foo } from './Foo.js'

export const App = {
  render() {
    const app = h('div', {}, 'app')
    return h(
      'div',
      {
        id: 'root',
      },
      [
        h(
          Foo,
          {},
          {
            header: ({ count }) => h('p', {}, '123' + count),
            footer: () => h('p', {}, '234'),
          }
        ),
        app,
      ]
      // [h(Foo, {}, [h('p', {}, '123'), h('p', {}, '234')]), app]
      // [h(Foo, {}, { default: () => h('p', {}, '234') }), app]
    )
  },
  setup() {
    return {
      msg: 'xxmyyds',
    }
  },
}
