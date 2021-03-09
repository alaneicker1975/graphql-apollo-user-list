const { RESTDataSource } = require('apollo-datasource-rest');

class BlogAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com';
  }
}

module.exports = BlogAPI;
