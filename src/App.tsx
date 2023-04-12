import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import RelatedMoviesPage from './features/movie/RelatedMoviesPage';
import MovieList from './features/movie/SearchMoviePage';

function App() {
  return (
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <Routes>
        <Route
          path='/'
          element={<Layout />}
          handle={{ crumb: () => <Link to='/'>Home</Link> }}
        >
          <Route index element={<MovieList />} />
          <Route path='related'>
            <Route
              path=':relatedMovieId'
              element={<RelatedMoviesPage />}
              handle={{
                crumb: () => <Link to='/related/:relatedMovieId'>Related</Link>,
              }}
            />
          </Route>
        </Route>

        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </QueryParamProvider>
  );
}

export default App;
