const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const BlogAPI = require('./api');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    blogApi: new BlogAPI(),
  }),
});

server.listen().then(() => {
  console.log(`
    Server is running
    Listening on port 4000
    Explore at https://studio.apollographql.com/dev
  `);
});
