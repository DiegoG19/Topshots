const loginResolver = require('./Login');

const rootResolver = {
  ...loginResolver
  
};

module.exports = rootResolver;