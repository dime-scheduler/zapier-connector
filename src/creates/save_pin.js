const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'name', label: 'Name', type: "string" },
  { key: 'color', label: 'Color', type: "string" },
];

const sample = {
  name: 'Zapier test',
  color: '#111111'
};

module.exports = createAction(
  constants.endpoints.pin,
  'save_pin',
  'Pin',
  'Save pin',
  'Saves a pin.',
  fields,
  sample
);