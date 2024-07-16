import { defineConfig } from 'vite';
import ejsPlugin from 'vite-plugin-ejs';

export default defineConfig({
  plugins: [ejsPlugin()],
  build: {
    rollupOptions: {
      input: 'index.ejs' // ここでエントリーポイントを設定
    }
  }
});
