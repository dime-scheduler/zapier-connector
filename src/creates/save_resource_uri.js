const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'resourceNo', label: 'ResourceNo', type: "string" },
  { key: 'uri', label: 'Uri', type: "string" },
  { key: 'description', label: 'Description', type: "string" },
];

const sample = {
  resourceNo: 'Zapier test',
  uri: 'https://www.dimescheduler.com',
  description: 'Dime.Scheduler'
};

module.exports = createAction(
  constants.endpoints.resource.uri,
  'save_resource_uri',
  'Resource Uri',
  'Save resource URI',
  'Saves a resource URI.',
  fields,
  sample
);