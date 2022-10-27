const constants = require('../utils/constants.js');
const { createAction } = require('../utils/actionBuilder.js');

const fields = [
  { key: 'name', label: 'Name', type: "string", required: false },
  { key: 'color', label: 'Color', type: "string", required: false },
];

module.exports = createAction(
  constants.endpoints.timeMarker,
  'save_time_marker',
  'Time Markers',
  'Save the time marker',
  'Saves the time marker.',
  fields
);