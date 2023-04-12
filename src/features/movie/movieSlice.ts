import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { movieApi } from './movieApiSlice';
import { MovieData } from './movieTypes';

interface MovieInitialState {
  searchTerm: string;
  redirect: boolean;
  movieData: MovieData;
}

interface SearchTermPayload {
  searchTerm: string;
  location: string;
}

const initialState: MovieInitialState = {
  searchTerm: '',
  redirect: false,
  movieData: [],
};
const minimumSearchLength = 3;

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    searchTermChanged(state, action: PayloadAction<SearchTermPayload>) {
      state.movieData = [];
      if (
        action.payload.searchTerm &&
        action.payload.searchTerm.length > minimumSearchLength
      ) {
        state.searchTerm = action.payload.searchTerm;
        state.redirect = action.payload.location !== '/';
      }
    },
    setMoviePayload(state, action: PayloadAction<MovieData>) {
      state.movieData = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      movieApi.endpoints.loadWikiData.matchFulfilled,
      (state, { payload }) => {
        const { index, content, pageId } = payload;
        state.movieData[index].wikipediaContent = content;
        if (pageId) {
          state.movieData[index].wikipediaPageId = pageId;
        }
      }
    );
  },
});

export const selectSearchTerm = (state: RootState) => state.movie.searchTerm;
export const selectSearchRedirect = (state: RootState) => state.movie.redirect;
export const selecteMoviePayload = (state: RootState) => state.movie.movieData;

export const { searchTermChanged, setMoviePayload } = movieSlice.actions;

export default movieSlice.reducer;
