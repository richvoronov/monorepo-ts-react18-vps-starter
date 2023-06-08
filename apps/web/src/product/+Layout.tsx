import { PropsWithChildren } from 'react';

import { LayoutMantine } from '#renderer/widgets/layout/index.ts';

function Layout({ children }: PropsWithChildren) {
  return (
    <LayoutMantine>
      {children}
    </LayoutMantine>
  );
}

export default Layout;