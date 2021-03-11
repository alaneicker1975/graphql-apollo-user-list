import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Users from './Users';
import EditUserModal from './EditUserModal';
import AppProvider from '../context/AppContext';

import '@atomikui/core/dist/styles/main.min.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <AppProvider>
      <main>
        <Users />
        <EditUserModal />
      </main>
    </AppProvider>
  </ApolloProvider>
);

export default App;
