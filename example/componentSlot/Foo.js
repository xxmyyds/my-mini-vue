import { h, renderSlots } from '../../lib/my-mini-vue.esm.js'

export const Foo = {
  setup(props, { emit }) {
    //
  },

  render() {
    const b = h('p', {}, 'xxmyyds')
    const count = 10
    return h('div', {}, [
      renderSlots(this.$slots, 'header', { count }),
      b,
      renderSlots(this.$slots, 'footer'),
    ])

    // return h('div', {}, [b, renderSlots(this.$slots, 'default')])
  },
}
