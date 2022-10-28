const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'name', label: 'Name', type: "string" },
  { key: 'displayName', label: 'Display Name', type: "string" },
  { key: 'color', label: 'color', type: "string" },
];

const sample = {
  name: 'Zapier test',
  displayName: 'Zapier test',
  color: '#111111'
};

module.exports = createAction(
  constants.endpoints.category,
  'save_category',
  'Category',
  'Save Category',
  'Saves a category.',
  fields,
  sample
);