import { defineConfig } from 'vite'
import tsPaths from 'vite-tsconfig-paths'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte(), tsPaths()],
})
