import { defineConfig } from '@rsbuild/core'
import { pluginSvelte } from '@rsbuild/plugin-svelte'
import UnoCSS from '@unocss/postcss'

export default defineConfig({
  plugins: [pluginSvelte()],
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [UnoCSS()],
      },
    },
  },
})
