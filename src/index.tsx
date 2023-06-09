import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { FetchPopularQuery, Movie } from './__generated__/graphql';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import store from './store';

const apolloClient = new ApolloClient({
  uri: 'https://tmdb.sandbox.zoosh.ie/dev/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Movie: {
        fields: {
          releaseDate: {
            read(date: string) {
              return new Date(date).getFullYear();
            },
          },
        },
      },
    },
  }),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Router>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
