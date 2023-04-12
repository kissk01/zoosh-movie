import { configureStore } from '@reduxjs/toolkit';

import { movieApi } from './features/movie/movieApiSlice';
import movieReducer from './features/movie/movieSlice';

const store = configureStore({
  reducer: {
    movie: movieReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([movieApi.middleware]),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
