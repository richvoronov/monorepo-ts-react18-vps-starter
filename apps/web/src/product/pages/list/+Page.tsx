import { Helmet } from 'react-helmet-async';

function Page() {
  return (
    <>
      <Helmet>
        <title>Product list</title>
      </Helmet>
      <div>Product list:</div>
      <ul>
        <li>
          <a href="/product/starship">Starship</a>
        </li>
        <li>
          <a href="/product/mac-studio">Mac Studio</a>
        </li>
      </ul>
    </>
  );
}

export default Page;
