import { MovieDataItem } from './movieTypes';

export const transformMovieDescription = ({
  genres,
  releaseDate,
}: MovieDataItem): string => {
  let movieDescription = String(new Date(releaseDate).getFullYear());
  if (genres.length) {
    movieDescription += ' | ';
    movieDescription += genres[0].name;
  }
  return movieDescription;
};
