import { ref } from '../../dist/my-mini-vue.esm.js'

export const Provider = {
  name: 'Provider',
  template: '<div>hi, {{count}}</div>',
  setup() {
    const count = (window.count = ref(1))
    return {
      count,
    }
  },
}
