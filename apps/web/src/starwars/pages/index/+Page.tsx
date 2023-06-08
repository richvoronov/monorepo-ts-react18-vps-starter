import { Helmet } from 'react-helmet-async';

import { MovieDetails, StarWarsInfo } from '#root/starwars/entity/starWars/index.ts';

function Page({ movie, title }: { movie: MovieDetails; title: string }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <StarWarsInfo movie={movie} />
    </>
  );
}

export default Page;
