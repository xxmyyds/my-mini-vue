import { h, getCurrentInstance } from '../../dist/my-mini-vue.esm.js'

export const Foo = {
  name: 'Foo',
  setup() {
    const instance = getCurrentInstance()
    console.log('Foo:', instance)
  },

  render() {
    return h('div', {}, 'Foo')
  },
}
