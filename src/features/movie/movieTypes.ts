import { SearchMoviesQuery } from '../../__generated__/graphql';
import {
  FetchPopularWikipediaItem,
  SearchMovieWikipediaItem,
} from '../wikipedia/wikipediaTypes';

type SearchMovie = SearchMoviesQuery['searchMovies'];
export type SearchMovieItem = SearchMovie[0];

export type MovieData =
  | SearchMovieWikipediaItem[]
  | FetchPopularWikipediaItem[];

export type MovieDataItem = MovieData[0];

export interface LoadWikipedia {
  name: string;
  index: number;
}
