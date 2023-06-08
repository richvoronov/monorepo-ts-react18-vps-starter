import { FilledContext } from 'react-helmet-async';
import type {
  PageContextBuiltIn,
  //*
  // When using Client Routing https://vite-plugin-ssr.com/clientRouting
  PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient
  /*/
  // When using Server Routing
  PageContextBuiltInClientWithServerRouting as PageContextBuiltInClient
  //*/
} from 'vite-plugin-ssr/types';

type Page = (pageProperties: PageProperties) => React.ReactElement;
type PageProperties = Record<string, unknown>;

export type PageContextCustom = {
  Page: Page;
  pageProps?: PageProperties;
  userAgent: string;
  config: {
    /** Title defined statically by /pages/some-page/+title.js (or by `export default { title }` in /pages/some-page/+config.js) */
    title?: string;
  };
  /** Title defined dynamically by onBeforeRender() */
  title?: string;
  helmetContext: FilledContext;
};

type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom;
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;

type PageContext = PageContextClient | PageContextServer;

export type { 
  PageContextServer,
  PageContextClient,
  PageContext,
  PageProperties as PageProps
};
