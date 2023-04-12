import { useQuery } from '@apollo/client';
import { Box, CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { FETCH_SIMILAR } from '../../queries/GraphQL/tmdb';
import { AppDispatch } from '../../store';
import MovieList from './MovieList';
import {
  selectSearchRedirect,
  selectSearchTerm,
  setMoviePayload,
} from './movieSlice';

type RelatedMoviesPageParams = {
  relatedMovieId: string;
};

const RelatedMoviesPage = () => {
  const redirect = useSelector(selectSearchRedirect);
  const searchTerm = useSelector(selectSearchTerm);
  const { relatedMovieId } = useParams<RelatedMoviesPageParams>();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (redirect) {
      navigate({ pathname: '/', search: `q=${searchTerm}` });
    }
  }, [redirect, navigate, searchTerm]);

  const { data, error, loading } = useQuery(FETCH_SIMILAR, {
    variables: { id: relatedMovieId || '', skip: !relatedMovieId },
  });

  useEffect(() => {
    if (loading === false && data) {
      dispatch(setMoviePayload(data.movie.similar));
    }
  }, [loading, data, dispatch]);

  return (
    <section>
      <Box>
        {!loading && data ? (
          <MovieList />
        ) : (
          <CircularProgress className='circularPreloader' />
        )}
        {!loading &&
          data?.movie.similar?.length === 0 &&
          'Related movie not found.'}
      </Box>
    </section>
  );
};

export default RelatedMoviesPage;
