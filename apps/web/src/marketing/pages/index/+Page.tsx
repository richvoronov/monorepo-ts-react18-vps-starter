import { Text } from '@mantine/core';
import { Helmet } from 'react-helmet-async';

function Page() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Text>Home page</Text>
    </>
  );
}

export default Page;