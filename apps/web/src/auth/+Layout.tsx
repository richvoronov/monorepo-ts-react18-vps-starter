import { PropsWithChildren } from 'react';

import { AuthLayout } from '#renderer/widgets/layout/index.ts';

function Layout({ children }: PropsWithChildren) {
  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  );
}

export default Layout;