module.exports = {
  Query: {
    users: async (_source, _, { dataSources }) =>
      dataSources.userApi.getUsers(),
    user: async (_source, { id }, { dataSources }) =>
      dataSources.userApi.getUser(id),
  },
};
