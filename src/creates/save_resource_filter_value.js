const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'sourceApp', label: 'SourceApp', type: "string" },
  { key: 'sourceType', label: 'SourceType', type: "string" },
  { key: 'resourceNo', label: 'ResourceNo', type: "string" },
  { key: 'filterGroup', label: 'FilterGroup', type: "string" },
  { key: 'filterValue', label: 'FilterValue', type: "string" },
  { key: 'transferToTemp', label: 'TransferToTemp', type: "string" },
];

const sample = {
  sourceApp: 'ZAPIER',
  sourceType: 'DEMO',
  resourceNo: 'Zapier test',
  filterGroup: 'Zapier test',
  filterValue: 'Zapier test'
};

module.exports = createAction(
  constants.endpoints.resource.filterValue,
  'save_resource_filter_value',
  'Resource Filter Value',
  'Save Resource Filter Value',
  'Saves a resource filter value.',
  fields,
  sample
);