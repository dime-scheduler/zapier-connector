const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'group', label: 'Group', type: "string" },
  { key: 'value', label: 'Value', type: "string" },
];

const sample = {
  sourceApp: 'ZAPIER',
  sourceType: 'DEMO',
  jobNo: 'DS_DEMO',
  taskNo: 'DS_DEMO_TEST',
  group: 'Zapier test',
  value: 'Zapier test',
};

module.exports = createAction(
  constants.endpoints.filterValue,
  'save_filter_value',
  'Filter Value',
  'Save filter value',
  'Saves a filter value.',
  fields,
  sample
);