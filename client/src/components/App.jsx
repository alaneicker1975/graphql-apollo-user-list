import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import Users from './Users';
import Loader from './Loader';
import UserFormModal from './UserFormModal';
import AppProvider from '../context/AppContext';

import '@atomikui/core/dist/styles/main.min.css';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => (
  <ErrorBoundary>
    <ApolloProvider client={client}>
      <AppProvider>
        <Header />
        <main className="padding-top-16">
          <Users />
        </main>
        <UserFormModal />
        <Loader />
      </AppProvider>
    </ApolloProvider>
  </ErrorBoundary>
);

export default App;
