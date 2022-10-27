const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'group', label: 'Group', type: "string", required: false },
  { key: 'value', label: 'Value', type: "string", required: false },
];

module.exports = createAction(
  constants.endpoints.filterValue,
  'save_filter_value',
  'Filter Value',
  'Save filter value',
  'Saves a filter value.',
  fields
);