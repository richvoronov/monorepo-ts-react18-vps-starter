import { MantineProvider } from '@mantine/core';
import React, { PropsWithChildren } from 'react';
import { FilledContext, Helmet, HelmetProvider } from "react-helmet-async";

import { PageContext, PageContextProvider } from '../shared/lib/usePageContext/index.ts';
// import '../shared/ui/css/index.css';
import { theme } from '../shared/ui/theme/theme.ts';
import { LayoutDefault } from '../widgets/layout/index.ts';


export function App({ pageContext, children, helmetContext }: { 
  pageContext: PageContext; 
  children: React.ReactNode;
  helmetContext: FilledContext;
}) {
  const Layout = (pageContext?.config?.['Layout'] as React.FC<PropsWithChildren>) || LayoutDefault;

  return (
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>MyProject</title>
          <meta charSet="utf8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="application-name" content="App" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="icon" type="image/svg+xml" href="/icon.svg" />
          <link rel="shortcut icon" href="/icon.svg" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <meta name="apple-mobile-web-app-title" content="App" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        </Helmet>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
          <PageContextProvider pageContext={pageContext}>
              <Layout>
                {children}
              </Layout>
          </PageContextProvider>
        </MantineProvider>
      </HelmetProvider>
    </React.StrictMode>
  );
}
