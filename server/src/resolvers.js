module.exports = {
  Query: {
    users: async (_source, { page }, { dataSources }) =>
      dataSources.userApi.getUsers(page),
    user: async (_source, { id }, { dataSources }) =>
      dataSources.userApi.getUser(id),
  },
};
