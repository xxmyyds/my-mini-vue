import { h } from '../../dist/my-mini-vue.esm.js'
import { Foo } from './Foo.js'

export const App = {
  render() {
    return h(
      'div',
      {
        id: 'root',
      },
      [
        h(Foo, {
          onAdd(a, b) {
            console.log('onAdd', a, b)
          },
          onAddFoo(a, b) {
            console.log('onAddfoo', a, b)
          },
        }),
      ]
    )
  },
  setup() {
    return {
      msg: 'xxmyyds',
    }
  },
}
