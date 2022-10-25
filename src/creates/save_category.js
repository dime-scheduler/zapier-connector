const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

const fields = [
  { key: 'name', label: 'Name', type: "string", required: false },
  { key: 'displayName', label: 'Display Name', type: "string", required: false },
  { key: 'color', label: 'color', type: "string", required: false },
];

module.exports = {
  key: 'save_category',
  noun: 'Category',
  display: {
    label: 'Save category',
    description: 'Saves a category',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: createFields(fields),
    perform: {
      url: createUri(constants.endpoints.category),
      method: 'POST',
      headers,
      body: createBody(fields),
    },
  }
};
