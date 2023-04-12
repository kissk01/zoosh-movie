import { useQuery } from '@apollo/client';
import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_POPULAR, SEARCH_MOVIES } from '../../queries/GraphQL/tmdb';
import MovieList from './MovieList';
import { selectSearchTerm, setMoviePayload } from './movieSlice';
import { MovieData } from './movieTypes';
import { AppDispatch } from '../../store';

const SearchMoviePage = () => {
  const [movieData, setMovieData] = useState<MovieData>();

  const searchTerm = useSelector(selectSearchTerm);
  const dispatch: AppDispatch = useDispatch();

  const { data, error, loading } = useQuery(SEARCH_MOVIES, {
    variables: { searchTerm },
    skip: !searchTerm,
  });

  // Fetch popular movies on init or no search term.
  const {
    data: popularData,
    error: popularError,
    loading: popularLoading,
  } = useQuery(FETCH_POPULAR, {
    skip: searchTerm !== '',
  });

  useEffect(() => {
    if (loading === false && data) {
      setMovieData(data.searchMovies);
      dispatch(setMoviePayload(data.searchMovies));
    }
  }, [loading, data, dispatch]);

  useEffect(() => {
    if (popularLoading === false && popularData && searchTerm === '') {
      setMovieData(popularData.movies);
      dispatch(setMoviePayload(popularData.movies));
    }
  }, [popularLoading, popularData, searchTerm, dispatch]);

  return (
    <section>
      <Box>
        {!loading && movieData ? (
          <MovieList />
        ) : (
          <CircularProgress className='circularPreloader' />
        )}{' '}
        {!loading && movieData?.length === 0 && 'Movie not found.'}
      </Box>
    </section>
  );
};

export default SearchMoviePage;
