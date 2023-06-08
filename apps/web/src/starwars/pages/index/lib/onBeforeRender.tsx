import fetch from 'cross-fetch';
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

import { MovieDetails, filterMovieData } from '#root/starwars/entity/starWars/index.ts';

async function onBeforeRender(pageContext: PageContextBuiltIn) {
  const response = await fetch(`https://star-wars.brillout.com/api/films/${pageContext.routeParams['id']}.json`);
  const movie = (await response.json()) as MovieDetails;

  // We remove data we don't need because we pass `pageContext.movie` to
  // the client; we want to minimize what is sent over the network.
  const filteredData = filterMovieData(movie);

  const { title } = filteredData;

  return {
    pageContext: {
      pageProps: {
        movie: filteredData,
        title,
      },
    }
  };
}

// https://vite-plugin-ssr.com/onBeforeRender
export default onBeforeRender;