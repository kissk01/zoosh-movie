export const WIKIPEDIA_SEARCH_URL =
  'https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&format=json&exintro=&explaintext&redirects=1&titles=';

export const WIKIPEDIA_PAGE = 'https://en.wikipedia.org/?curid=';

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
