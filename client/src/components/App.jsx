import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Users from './Users';
import Loader from './Loader';
import EditUserModal from './EditUserModal';
import AppProvider from '../context/AppContext';

import '@atomikui/core/dist/styles/main.min.css';

export const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <AppProvider>
      <main>
        <Users />
        <EditUserModal />
        <Loader />
      </main>
    </AppProvider>
  </ApolloProvider>
);

export default App;
