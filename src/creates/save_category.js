const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'name', label: 'Name', type: "string", required: false },
  { key: 'displayName', label: 'Display Name', type: "string", required: false },
  { key: 'color', label: 'color', type: "string", required: false },
];

module.exports = createAction(
  constants.endpoints.category,
  'save_category',
  'Category',
  'Save category',
  'Saves a category.',
  fields
);