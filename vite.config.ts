import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  // @ts-ignore
  plugins: [react()],
  // @ts-ignore
  test: {
    globals: true,
    environment: 'jsdom',
    css:true,
    setupFiles:'./test-setup.ts',
    coverage:{
      reporter:["text", "html"]
    }
  },
});
