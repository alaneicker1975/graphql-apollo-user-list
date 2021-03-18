const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const UserAPI = require('./api');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    userApi: new UserAPI(),
  }),
});

const app = express();

app.use(cors());
app.use(express.static('../client/dist'));

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`
    Server is running
    Listening on port 4000
    Explore at http://localhost:4000${server.graphqlPath}
  `);
});
