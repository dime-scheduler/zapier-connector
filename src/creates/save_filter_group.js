const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'name', label: 'Name', type: "string" },
  { key: 'columnNo', label: 'ColumnNo', type: "string" },
  { key: 'dataFilter', label: 'DataFilter', type: "string" },
];

const sample = {
  sourceApp: 'ZAPIER',
  sourceType: 'DEMO',
  jobNo: 'DS_DEMO',
  taskNo: 'DS_DEMO_TEST',
  name: 'Zapier test'
};

module.exports = createAction(
  constants.endpoints.filterGroup,
  'save_filter_group',
  'Filter Group',
  'Save Filter Group',
  'Saves a filter group.',
  fields,
  sample
);