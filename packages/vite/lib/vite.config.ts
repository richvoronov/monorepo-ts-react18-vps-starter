/* eslint-disable @typescript-eslint/ban-ts-comment */
import react from '@vitejs/plugin-react-swc';
import { UserConfig } from 'vite';
import ssr from 'vite-plugin-ssr/plugin';

const config: UserConfig = {
  plugins: [
    react(), 
    // @ts-expect-error
    ssr(/*{ prerender: true }*/)
  ],
  build: {
    minify: true,
  }
};

export default config;
