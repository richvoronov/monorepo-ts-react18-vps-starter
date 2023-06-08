import { Text } from '@mantine/core';
import { Helmet } from 'react-helmet-async';

function Page() {
  return (
    <>
      <Helmet>
        <title>Auth login</title>
      </Helmet>
      <Text>Login</Text>
    </>
  );
}

export default Page;