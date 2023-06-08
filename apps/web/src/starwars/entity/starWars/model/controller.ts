/* eslint-disable camelcase */
import { Movie, MovieDetails } from './types.ts';

function filterMoviesData(movies: MovieDetails[]): Movie[] {
  return movies.map((movie: MovieDetails) => {
    const { title, release_date, id } = movie;
    return { title, release_date, id };
  });
}

function getTitle(movies: Movie[] | MovieDetails[]): string {
  const title = `${movies.length} Star Wars Movies`;
  return title;
}

function filterMovieData(movie: MovieDetails & Record<string, unknown>): MovieDetails {
  const { id, title, release_date, director, producer } = movie;
  return { id, title, release_date, director, producer };
}

export {
  filterMoviesData,
  filterMovieData,
  getTitle,
};