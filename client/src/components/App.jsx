import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Users from './Users';

import '@atomikui/core/dist/styles/main.min.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <main>
      <Users />
    </main>
  </ApolloProvider>
);

export default App;
