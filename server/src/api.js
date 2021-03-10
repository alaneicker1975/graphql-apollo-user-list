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
    this.post('users', user);
  }

  async updateUser(user) {
    this.patch('users', { id: user.id, user });
  }

  async deleteUser(id) {
    this.delete(`users/${id}`);
  }
}

module.exports = UserAPI;
