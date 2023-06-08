import ReactDOM from 'react-dom/client';

import { App } from './app/index.ts';
import type { PageContextClient } from './shared/lib/usePageContext/types.ts';

let root: ReactDOM.Root;

async function onRenderClient(pageContext: PageContextClient) {
  const container = document.querySelector('#root')!;

  const { Page, pageProps, routeParams, helmetContext, isHydration } = pageContext;
  const page = (
    <App 
      pageContext={pageContext}
      helmetContext={helmetContext}
    >
      <Page {...pageProps} routeParams={routeParams} />
    </App>
  );

  if (isHydration) {
    root = ReactDOM.hydrateRoot(container, page);
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container);
    }
    root.render(page);
  }

}

// https://vite-plugin-ssr.com/onRenderClient
export default onRenderClient;