import { getCurrentInstance, h } from '../../dist/my-mini-vue.esm.js'
import { Foo } from './Foo.js'

export const App = {
  name: 'App',
  render() {
    return h(
      'div',
      {
        id: 'root',
      },
      [h('p', {}, 'currentInstance demo'), h(Foo)]
    )
  },
  setup() {
    const instance = getCurrentInstance()
    console.log('App:', instance)
    return {}
  },
}
