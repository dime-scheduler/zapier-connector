const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

const fields = [
  { key: 'resourceNo', label: 'ResourceNo', type: "string", required: false },
  { key: 'uri', label: 'Uri', type: "string", required: false },
  { key: 'description', label: 'Description', type: "string", required: false },
];

module.exports = {
  key: 'save_resource_uri',
  noun: 'Resource Uri',
  display: {
    label: 'Save resource URI',
    description: 'Saves a resource URI',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: createFields(fields),
    perform: {
      url: createUri(constants.endpoints.resource.uri),
      method: 'POST',
      headers,
      body: createBody(fields),
    },
  },
};
