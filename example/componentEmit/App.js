import { h } from '../../lib/my-mini-vue.esm.js'
import { Foo } from './Foo.js'

export const App = {
  render() {
    return h(
      'div',
      {
        id: 'root',
      },
      [h(Foo)]
    )
  },
  setup() {
    return {
      msg: 'xxmyyds',
    }
  },
}
