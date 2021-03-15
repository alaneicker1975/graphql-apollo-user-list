module.exports = {
  Query: {
    users: async (_source, { page, limit }, { dataSources }) =>
      dataSources.userApi.getUsers(page, limit),
    user: async (_source, { id }, { dataSources }) =>
      dataSources.userApi.getUser(id),
  },
  Mutation: {
    addUser: async (_source, body, { dataSources }) => {
      const { data } = await dataSources.userApi.addUser(body);
      return { data };
    },
    updateUser: async (_source, body, { dataSources }) => {
      const { data } = await dataSources.userApi.updateUser(body);
      return { data: { id: body.id, ...data } };
    },
    deleteUser: async (_source, { id }, { dataSources }) =>
      dataSources.userApi.deleteUser(id),
  },
};
