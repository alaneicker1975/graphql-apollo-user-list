const { RESTDataSource } = require('apollo-datasource-rest');

class TodoAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://localhost:4000/api';
  }
}

module.exports = TodoAPI;
