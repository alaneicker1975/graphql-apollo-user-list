const { ApolloServer } = require('apollo-server');
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

server.listen().then(() => {
  console.log(`
    Server is running
    Listening on port 4000
    Explore at https://studio.apollographql.com/dev
  `);
});
