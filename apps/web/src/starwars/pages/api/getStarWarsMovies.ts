import fetch from 'node-fetch';

import type { MovieDetails } from '#starwars/entity/starWars/model/types.ts';

export async function getStarWarsMovies(): Promise<MovieDetails[]> {
  const response = await fetch('https://star-wars.brillout.com/api/films.json');
  let movies: MovieDetails[] = ((await response.json()) as any).results;
  movies = movies.map((movie: MovieDetails, index: number) => ({
    ...movie,
    id: String(index + 1)
  }));
  return movies;
}
