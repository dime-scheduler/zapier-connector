const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

const fields = [
  { key: 'name', label: 'Name', type: "string", required: false },
  { key: 'color', label: 'Color', type: "string", required: false },
];

module.exports = {
  key: 'save_pin',
  noun: 'Pin',
  display: {
    label: 'Save pin',
    description: 'Saves a pin indicator',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: createFields(fields),
    perform: {
      url: createUri(constants.endpoints.caption),
      method: 'POST',
      headers,
      body: createBody(fields),
    },
  },
};
