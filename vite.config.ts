import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'src/mock',
        enable: command === 'serve'
      }),
    AutoImport({
      imports: ['vue'],
      dts: true
    })
  ],
  resolve: {
    alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }
})
