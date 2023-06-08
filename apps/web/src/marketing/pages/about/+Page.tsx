import { Text } from '@mantine/core';
import { Helmet } from 'react-helmet-async';

function Page() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Text>About page</Text>
    </>
  );
}

export default Page;