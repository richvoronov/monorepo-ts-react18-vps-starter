import { ServerStyles, createStylesServer } from '@mantine/ssr';
import { renderToString } from 'react-dom/server';
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr/server';

import { App } from './app/App.tsx';
import type { PageContextServer } from './shared/lib/usePageContext/types.ts';

const stylesServer = createStylesServer();

async function onRenderHtml(pageContext: PageContextServer): Promise<{ pageContext: {}; documentHtml: unknown }> {
  const { Page, pageProps, routeParams } = pageContext;
  const helmetContext: any = {};

  const html = renderToString(
    <App 
      pageContext={pageContext}
      helmetContext={helmetContext}
    >
      <Page {...pageProps} routeParams={routeParams} />
    </App>
  );

  const { helmet } = helmetContext;

  const styles = renderToString(<ServerStyles html={html} server={stylesServer} />);

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="ru" ${dangerouslySkipEscape(helmet.htmlAttributes.toString())}>
      <head>
        ${dangerouslySkipEscape(helmet.title.toString())}
        ${dangerouslySkipEscape(helmet.meta.toString())}
        ${dangerouslySkipEscape(helmet.link.toString())}
        ${dangerouslySkipEscape(styles.toString())}
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(html)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    // See https://vite-plugin-ssr.com/stream#initial-data-after-stream-end
    pageContext: async () => {}
  };
}

// https://vite-plugin-ssr.com/onRenderHtml
export default onRenderHtml;