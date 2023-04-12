import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import RelatedMoviesPage from './features/movie/RelatedMoviesPage';
import MovieList from './features/movie/SearchMoviePage';

function App() {
  return (
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MovieList />} />
          <Route path='related'>
            <Route path=':relatedMovieId' element={<RelatedMoviesPage />} />
          </Route>
        </Route>

        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </QueryParamProvider>
  );
}

export default App;
