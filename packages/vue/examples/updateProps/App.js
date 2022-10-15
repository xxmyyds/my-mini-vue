import { h, ref } from '../../dist/my-mini-vue.esm.js'

export const App = {
  name: 'App',
  render() {
    return h(
      'div',
      {
        id: 'root',
        foo: this.props.foo,
        bar: this.props.bar,
      },
      [
        h('div', {}, 'xxmyyds'),
        h('button', { onClick: this.onChangePropsDemo1 }, 'onChangePropsDemo1'),
        h('button', { onClick: this.onChangePropsDemo2 }, 'onChangePropsDemo2'),
        h('button', { onClick: this.onChangePropsDemo3 }, 'onChangePropsDemo3'),
      ]
    )
  },
  setup() {
    const props = ref({
      foo: 'foo',
      bar: 'bar',
    })
    const onChangePropsDemo1 = () => {
      props.value.foo = 'new-foo'
    }

    const onChangePropsDemo2 = () => {
      props.value.foo = undefined
    }

    const onChangePropsDemo3 = () => {
      props.value = {
        foo: 'newFoo',
      }
    }
    return {
      props,
      onChangePropsDemo1,
      onChangePropsDemo2,
      onChangePropsDemo3,
    }
  },
}
