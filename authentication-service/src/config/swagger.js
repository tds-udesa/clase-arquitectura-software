const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    version: '1.0.0',
    title: 'Authentication Service',
    description: 'Authentication service for the application'
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Authentication',
      description: 'Authentication related operations'
    },
  ],
  definitions: {}
};

const outputFile = '../swagger-output.json';
const routes = ['../routes/auth.js'];

swaggerAutogen(outputFile, routes, doc).then(() => {
  require('../server.js');
});
