const { RESTDataSource } = require('apollo-datasource-rest');

class BlogAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com';
  }

  async getPosts() {
    return this.get('/posts');
  }

  async getPost(id) {
    return this.get(`/posts/${id}`);
  }

  async addPost(post) {
    this.post('posts', post);
  }

  async updatePost(post) {
    this.patch('posts', { id: post.id, post });
  }

  async deletePost(id) {
    this.delete(`posts/${id}`);
  }
}

module.exports = BlogAPI;
