import { createApp } from '../../lib/my-mini-vue.esm.js'
import { Provider } from './App.js'

const rootContainer = document.getElementById('app')
createApp(Provider).mount(rootContainer)
