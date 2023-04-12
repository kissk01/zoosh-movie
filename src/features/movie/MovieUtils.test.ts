import { transformMovieDescription } from './MovieUtils';
import { MovieDataItem } from './movieTypes';

const properMovieData: MovieDataItem = {
  id: '502356',
  name: 'The Super Mario Bros. Movie',
  releaseDate: '2023-04-05T00:00:00.000Z',
  genres: [
    {
      name: 'Animation',
    },
    {
      name: 'Adventure',
    },
    {
      name: 'Family',
    },
    {
      name: 'Fantasy',
    },
    {
      name: 'Comedy',
    },
  ],
  img: {
    url: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
  },
};
const properMovieDescription = '2023 | Animation';

const noGenreMovieData = {
  id: '757019',
  name: 'Fight',
  releaseDate: '1973-01-01T00:00:00.000Z',
  genres: [],
  img: {
    url: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/sKLsn8KckO0uP1jaQR7jsmGdkNj.jpg',
  },
};
const noGenreMovieDescription = '1973';

describe('Transforms movie description', () => {
  it('Returns movie year and first genre', () => {
    expect(properMovieDescription).toEqual(
      transformMovieDescription(properMovieData)
    );
  });
});

describe('Transforms movie description with no genres', () => {
  it('Returns movie year', () => {
    expect(noGenreMovieDescription).toEqual(
      transformMovieDescription(noGenreMovieData)
    );
  });
});
