const constants = require('../utils/constants.js');
const { createAction } = require('../utils/actionBuilder.js');

const fields = [
  { key: 'name', label: 'Name', type: "string" },
  { key: 'color', label: 'Color', type: "string" },
];

const sample = {
  name: 'Zapier test',
  color: '#111111'
};

module.exports = createAction(
  constants.endpoints.timeMarker,
  'save_time_marker',
  'Time Markers',
  'Save the time marker',
  'Saves the time marker.',
  fields,
  sample
);