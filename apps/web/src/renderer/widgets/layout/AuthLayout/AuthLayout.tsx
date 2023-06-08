import { Grid } from '@mantine/core';
import { PropsWithChildren } from 'react';

export function AuthLayout({ children }: PropsWithChildren) {
  return (
    <Grid justify='center' align='center' sx={{ height: '100vh' }}>
      {children}
    </Grid>
  );
}