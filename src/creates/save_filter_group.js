const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

const fields = [
  { key: 'name', label: 'Name', type: "string", required: false },
  { key: 'columnNo', label: 'ColumnNo', type: "string", required: false },
  { key: 'dataFilter', label: 'DataFilter', type: "string", required: false },
];

module.exports = {
  key: 'save_filter_group',
  noun: 'Filter Group',
  display: {
    label: 'Save filter group',
    description: 'Saves a filter group',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: createFields(fields),
    perform: {
      url: createUri(constants.endpoints.filterGroup),
      method: 'POST',
      headers,
      body: createBody(fields),
    },
  },
};
