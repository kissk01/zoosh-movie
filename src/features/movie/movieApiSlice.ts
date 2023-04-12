import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WIKIPEDIA_SEARCH_URL, WikipediaResponse } from '../../queries/wiki';
import { WikipediaData } from './movieSlice';
import { LoadWikipedia } from './movieTypes';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => {
    return {
      loadWikiData: builder.mutation<WikipediaData, LoadWikipedia>({
        query: ({ name, index }) => ({
          url: `${WIKIPEDIA_SEARCH_URL}${name}`,
          method: 'GET',
        }),
        transformResponse: (
          wikipediaResponse: WikipediaResponse,
          meta,
          { index }
        ): WikipediaData => {
          const wikipediaPageId = Number(
            Object.keys(wikipediaResponse.query.pages)[0]
          );
          // handling no content
          if (wikipediaPageId === -1) {
            return {
              content: 'Wikipedia content not found.',
              index,
              pageId: null,
            };
          }
          return {
            content: wikipediaResponse.query.pages[wikipediaPageId].extract,
            index,
            pageId: wikipediaPageId,
          };
        },
      }),
    };
  },
});

export const { useLoadWikiDataMutation } = movieApi;
