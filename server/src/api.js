const { RESTDataSource } = require('apollo-datasource-rest');

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://reqres.in/api';
  }

  async getUsers(page = 1) {
    return this.get('/users', { page });
  }

  async getUser(id) {
    return this.get(`/users/${id}`);
  }

  async addUser(user) {
    return this.post('/users', user);
  }

  async updateUser(user) {
    const { id, ...body } = user;
    return this.patch(`/users`, { id, body });
  }

  async deleteUser(id) {
    return this.delete(`/users/${id}`);
  }
}

module.exports = UserAPI;
