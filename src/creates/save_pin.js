const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'name', label: 'Name', type: "string", required: false },
  { key: 'color', label: 'Color', type: "string", required: false },
];

module.exports = createAction(
  constants.endpoints.pin,
  'save_pin',
  'Pin',
  'Save pin',
  'Saves a pin.',
  fields
);