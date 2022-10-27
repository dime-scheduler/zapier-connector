const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'sourceApp', label: 'SourceApp', type: "string", required: false },
  { key: 'sourceType', label: 'SourceType', type: "string", required: false },
  { key: 'resourceNo', label: 'ResourceNo', type: "string", required: false },
  { key: 'filterGroup', label: 'FilterGroup', type: "string", required: false },
  { key: 'filterValue', label: 'FilterValue', type: "string", required: false },
  { key: 'transferToTemp', label: 'TransferToTemp', type: "string", required: false },
];

module.exports = createAction(
  constants.endpoints.resource.filterValue,
  'save_resource_filter_value',
  'Resource Filter Value',
  'Save resource filter value',
  'Saves a resource filter value.',
  fields
);