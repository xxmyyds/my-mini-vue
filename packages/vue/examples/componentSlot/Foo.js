import { h, renderSlots } from '../../dist/my-mini-vue.esm.js'

export const Foo = {
  name: 'Foo',
  setup(props, { emit }) {
    //
  },

  render() {
    const count = 10
    // return h('div', {}, [
    //   renderSlots(this.$slots, 'header', { count }),
    //   b,
    //   renderSlots(this.$slots, 'footer'),
    // ])

    return h('div', {}, [renderSlots(this.$slots, 'default')])
  },
}
