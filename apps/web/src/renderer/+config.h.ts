/* eslint-disable consistent-return */
import type { Config } from 'vite-plugin-ssr/types';

import { onHydrationEnd, onPageTransitionEnd, onPageTransitionStart } from './shared/lib/index.ts';

export default {
  passToClient: ['pageProps', 'routeParams', 'helmetContext', 'renderedStyles'],
  clientRouting: true,
  hydrationCanBeAborted: true,
  prefetchStaticAssets: "viewport",
  onHydrationEnd,
  onPageTransitionEnd,
  onPageTransitionStart,
  // https://vite-plugin-ssr.com/meta
  meta: {
    Layout: {
      env: 'server-and-client'
    },
    // Create new config 'onBeforeRenderIsomorph'
    onBeforeRenderIsomorph: {
      env: 'config-only',
      effect({ configDefinedAt, configValue }) {
        if (typeof configValue !== 'boolean') {
          throw new TypeError(`${configDefinedAt} should be a boolean`);
        }
        if (configValue) {
          return {
            meta: {
              onBeforeRender: {
                // We override VPS's default behavior of always loading/executing onBeforeRender() on the server-side.
                // If we set onBeforeRenderIsomorph to true, then onBeforeRender() is loaded/executed in the browser as well, allowing us to fetch data direcly from the browser upon client-side navigation (without involving our Node.js/Edge server at all).
                env: 'server-and-client'
              }
            }
          };
        }
      }
    }
  }
} satisfies Config;
