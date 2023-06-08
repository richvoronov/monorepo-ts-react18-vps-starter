/* eslint-disable unicorn/no-null */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig, mergeConfig } from 'vite';

// https://github.com/vitejs/vite/issues/5370
import config from '../../packages/vite';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default mergeConfig(config, defineConfig({
  resolve: {
    alias: {
     "#root": `${dirname}/src`,
     "#renderer": `${dirname}/src/renderer`,
     "#auth": `${dirname}/src/auth`,
     "#marketing": `${dirname}/src/marketing`,
     "#product": `${dirname}/src/product`,
     "#starwars": `${dirname}/src/starwars`
    }
  },
}));