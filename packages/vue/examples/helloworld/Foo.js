import { h } from '../../dist/my-mini-vue.esm.js'

export const Foo = {
  setup(props) {
    console.log(props)
    props.count++
  },

  render() {
    return h('div', {}, 'haha' + this.count)
  },
}
