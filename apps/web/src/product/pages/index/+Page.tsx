import { Text } from '@mantine/core';
import { Helmet } from 'react-helmet-async';

function Page({ routeParams }: { routeParams: Record<string, string> }) {
  return (
    <>
      <Helmet>
        <title>Product</title>
      </Helmet>
      <Text>Product id: {routeParams?.['productId']}</Text>
    </>
  );
}

export default Page;
