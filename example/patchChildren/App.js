import { h } from '../../lib/my-mini-vue.esm.js'
import ArrayToText from './ArrayToText.js'
import TextToText from './TextToText.js'
import TextToArray from './TextToArray.js'
import ArrayToArray from './ArrayToArray.js'

export const App = {
  name: 'App',
  render() {
    return h(
      'div',
      {
        id: 1,
      },
      [
        h('div', {}, 'xxmyyds'),
        // h(ArrayToText),
        // h(TextToText),
        // h(TextToArray),
        h(ArrayToArray),
      ]
    )
  },
  setup() {},
}
