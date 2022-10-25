const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

const fields = [
  { key: 'group', label: 'Group', type: "string", required: false },
  { key: 'value', label: 'Value', type: "string", required: false },
];

module.exports = {
  key: 'save_filter_value',
  noun: 'Filter Value',
  display: {
    label: 'Save filter value',
    description: 'Saves a filter value',
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
