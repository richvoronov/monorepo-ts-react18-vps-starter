/* eslint-disable camelcase */
import { Helmet } from 'react-helmet-async';

import { Movie, StarWarsList } from '#root/starwars/entity/starWars/index.ts';

function Page({ movies }: { movies: Movie[] }) {
  return (
    <>
      <Helmet>
        <title>Star Wars list</title>
      </Helmet>
      <h1>Star Wars Movies</h1>
      <StarWarsList movies={movies} />
      <p>
        Source: <a href="https://star-wars.brillout.com">star-wars.brillout.com</a>.
      </p>
      <p>
        Data can be fetched by using the <code>onBeforeRender()</code> hook.
      </p>
    </>
  );
}

export default Page;
