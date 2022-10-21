const authentication = require('./authentication');
const createCategoryCreate = require('./creates/create_category.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  creates: { [createCategoryCreate.key]: createCategoryCreate },
};
