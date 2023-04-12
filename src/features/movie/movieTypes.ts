import {
  FetchPopularQuery,
  SearchMoviesQuery,
} from '../../__generated__/graphql';

type SearchMovie = SearchMoviesQuery['searchMovies'];
type SearchMovieItem = SearchMovie[0];

interface SearchMovieWikipediaItem extends SearchMovieItem {
  wikipediaContent?: string;
  wikipediaPageId?: number;
}

type FetchPopular = FetchPopularQuery['movies'];
type FetchPopularItem = FetchPopular[0];
interface FetchPopularWikipediaItem extends FetchPopularItem {
  wikipediaContent?: string;
  wikipediaPageId?: number;
}

export type MovieData =
  | SearchMovieWikipediaItem[]
  | FetchPopularWikipediaItem[];

export type MovieDataItem = MovieData[0];

export interface LoadWikipedia {
  name: string;
  index: number;
}
