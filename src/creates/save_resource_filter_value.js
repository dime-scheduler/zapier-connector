const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

const fields = [
  { key: 'sourceApp', label: 'SourceApp', type: "string", required: false },
  { key: 'sourceType', label: 'SourceType', type: "string", required: false },
  { key: 'resourceNo', label: 'ResourceNo', type: "string", required: false },
  { key: 'filterGroup', label: 'FilterGroup', type: "string", required: false },
  { key: 'filterValue', label: 'FilterValue', type: "string", required: false },
  { key: 'transferToTemp', label: 'TransferToTemp', type: "string", required: false },
];

module.exports = {
  key: 'save_resource_filter_value',
  noun: 'Resource Filter Value',
  display: {
    label: 'Save resource filter value',
    description: 'Saves a resource filter value',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: createFields(fields),
    perform: {
      url: createUri(constants.endpoints.resource.filterValue),
      method: 'POST',
      headers,
      body: createBody(fields),
    },
  },
};
