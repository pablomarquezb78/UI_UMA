import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], 
  base: 'https://pablomarquezb78.github.io/UI_UMA',
})
