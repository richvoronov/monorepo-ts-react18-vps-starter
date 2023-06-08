/* eslint-disable camelcase */
import { Movie } from '../../model/types.ts';

export const StarWarsList = ({ movies }: { movies: Movie[] }) => {
  return (
    <ol>
      {movies.map(({ id, title, release_date }) => (
        <li key={id}>
          <a href={`/star-wars/${id}`}>{title}</a> ({ release_date })
        </li>
      ))}
    </ol>
  );
};
