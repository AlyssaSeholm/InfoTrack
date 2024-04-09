import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     // This alias allows you to use `@` to refer to the `src` directory
  //     '@': path.resolve(__dirname, './src')
  //   }
  // },
})
