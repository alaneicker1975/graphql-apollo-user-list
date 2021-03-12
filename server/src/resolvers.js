module.exports = {
  Query: {
    users: async (_source, { page }, { dataSources }) =>
      dataSources.userApi.getUsers(page),
    user: async (_source, { id }, { dataSources }) =>
      dataSources.userApi.getUser(id),
  },
  Mutation: {
    updateUser: async (_source, data, { dataSources }) => {
      const { body } = await dataSources.userApi.updateUser(data);
      return { data: { id: data.id, ...body } };
    },
  },
};
