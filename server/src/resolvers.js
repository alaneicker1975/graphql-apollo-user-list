module.exports = {
  Query: {
    users: async (_source, { page }, { dataSources }) =>
      dataSources.userApi.getUsers(page),
    user: async (_source, { id }, { dataSources }) =>
      dataSources.userApi.getUser(id),
  },
  Mutation: {
    updateUser: async (_source, body, { dataSources }) => {
      const { data } = await dataSources.userApi.updateUser(body);
      return { data: { id: body.id, ...data } };
    },
    deleteUser: async (_source, { id }, { dataSources }) =>
      dataSources.userApi.deleteUser(id),
  },
};
