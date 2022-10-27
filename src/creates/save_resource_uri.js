const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'resourceNo', label: 'ResourceNo', type: "string", required: false },
  { key: 'uri', label: 'Uri', type: "string", required: false },
  { key: 'description', label: 'Description', type: "string", required: false },
];

module.exports = createAction(
  constants.endpoints.resource.uri,
  'save_resource_uri',
  'Resource Uri',
  'Save resource URI',
  'Saves a resource URI.',
  fields
);