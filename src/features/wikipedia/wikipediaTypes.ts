import { FetchPopularQuery } from '../../__generated__/graphql';
import { SearchMovieItem } from '../movie/movieTypes';

export interface SetWikipediaData {
  name: string;
  index: number;
}

export interface WikipediaData {
  content: string | undefined;
  index: number;
  pageId: number | null;
}

export interface WikipediaItem {
  pageid?: string;
  ns: number;
  title: string;
  extract?: string;
}

export interface WikipediaPages {
  pages: { [key: number]: WikipediaItem };
}

export interface WikipediaResponse {
  query: WikipediaPages;
}

export interface SearchMovieWikipediaItem extends SearchMovieItem {
  wikipediaContent?: string;
  wikipediaPageId?: number;
}

type FetchPopular = FetchPopularQuery['movies'];
type FetchPopularItem = FetchPopular[0];
export interface FetchPopularWikipediaItem extends FetchPopularItem {
  wikipediaContent?: string;
  wikipediaPageId?: number;
}
