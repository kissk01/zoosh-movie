import { gql } from '../../__generated__';

export const BLANK_MOVIE_PAGE =
  'https://image.tmdb.org/t/p/w185_and_h278_bestv2/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg';

export const FETCH_POPULAR = gql(`
  query fetchPopular {
    movies: popularMovies {
      id
      name
      genres {
        name
      }
      releaseDate
      img: poster {
        url: medium
      }
    }
  }
`);

export const FETCH_SIMILAR = gql(`
  query getMovie($id: ID!) {
    movie(id: $id) {
      similar {
        id
        name
        genres {
          name
        }
        releaseDate
        img: poster {
          url: medium
        }
      }
    }
  }
`);

export const SEARCH_MOVIES = gql(`
  query SearchMovies($searchTerm: String!) {
    searchMovies(query: $searchTerm) {
      id
      name
      genres {
        name
      }
      releaseDate
      img: poster {
        url: medium
      }
    }
  }
`);
