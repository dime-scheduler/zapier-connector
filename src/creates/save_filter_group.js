const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'name', label: 'Name', type: "string", required: false },
  { key: 'columnNo', label: 'ColumnNo', type: "string", required: false },
  { key: 'dataFilter', label: 'DataFilter', type: "string", required: false },
];

module.exports = createAction(
  constants.endpoints.filterGroup,
  'save_filter_group',
  'Filter Group',
  'Save filter group',
  'Saves a filter group.',
  fields
);