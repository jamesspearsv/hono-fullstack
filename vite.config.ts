import build from '@hono/vite-build/node';
import { defineConfig } from 'vite';
import devServer from '@hono/vite-dev-server';

export default defineConfig(({ mode }) => {
  {
    if (mode === 'client') {
      /* Build client app */
      return {
        build: {
          rollupOptions: {
            input: './src/client/main.tsx',
            output: {
              dir: './dist/static',
              entryFileNames: 'main.js',
            },
          },
          copyPublicDir: false,
        },
      };
    } else {
      /* Build server app & use dev server */
      const entry = './src/index.tsx';
      return {
        plugins: [
          devServer({ entry }),
          build({
            entry,
            port: 3001,
          }),
        ],
      };
    }
  }
});
