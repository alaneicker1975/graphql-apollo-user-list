module.exports = {
  Query: {
    posts: async (_source, _, { dataSources }) =>
      dataSources.blogApi.getPosts(),
    post: async (_source, { id }, { dataSources }) =>
      dataSources.blogApi.getPost(id),
  },
};
