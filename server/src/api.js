const { RESTDataSource } = require('apollo-datasource-rest');
const dotenv = require('dotenv-flow');

dotenv.config();

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BASE_URL;
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
    return this.patch(`/users/${id}`, body);
  }

  async deleteUser(id) {
    await this.delete(`/users/${id}`);
    return { id };
  }
}

module.exports = UserAPI;
