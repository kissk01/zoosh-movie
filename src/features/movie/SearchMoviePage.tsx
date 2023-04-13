import { useQuery, useMutation } from '@apollo/client';
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

  const { loading } = useQuery(SEARCH_MOVIES, {
    variables: { searchTerm },
    skip: !searchTerm,
    onCompleted: (payload) => {
      setMovieData(payload.searchMovies);
      dispatch(setMoviePayload(payload.searchMovies));
    },
  });

  const { data: popularData } = useQuery(FETCH_POPULAR, {
    skip: searchTerm !== '',
    onCompleted: (payload) => {
      setMovieData(payload.movies);
      dispatch(setMoviePayload(payload.movies));
    },
  });

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
