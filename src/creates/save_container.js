const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

const fields = [
  { key: 'name', label: 'Name', type: "string", required: false },
  { key: 'handleDate', label: 'HandleDate', type: "string", required: false },
  { key: 'handleLocked', label: 'HandleLocked', type: "string", required: false },
];

module.exports = {
  key: 'save_container',
  noun: 'Container',
  display: {
    label: 'Save container',
    description: 'Saves a container',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: createFields(fields),
    perform: {
      url: createUri(constants.endpoints.container),
      method: 'POST',
      headers,
      body: createBody(fields),
    },
  },
};
