import { mount } from 'svelte'
// @ts-expect-error - no types available
import App from './App.svelte'
import './index.css'

const app = mount(App, {
  target: document.body,
})

export default app
