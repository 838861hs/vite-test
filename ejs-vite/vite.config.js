// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // CSSとその他のアセットファイル名をカスタマイズ
        assetFileNames: (assetInfo) => {
          // CSSファイルの場合、cssフォルダに配置
          if (assetInfo.name.endsWith('.css')) {
            return 'css/[name].[hash][extname]';
          }
          // その他のアセットの場合、assetsフォルダを使わずに直接distに配置
          return '[name].[hash][extname]';
        },
        // JSファイルの出力設定
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',
      }
    }
  }
});
