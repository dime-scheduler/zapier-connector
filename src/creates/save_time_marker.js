const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

const fields = [
  { key: 'name', label: 'Name', type: "string", required: false },
  { key: 'color', label: 'Color', type: "string", required: false },
];

module.exports = {
  key: 'save_time_marker',
  noun: 'Time Marker',
  display: {
    label: 'Save time marker',
    description: 'Saves a time marker',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: createFields(fields),
    perform: {
      url: createUri(constants.endpoints.timeMarker),
      method: 'POST',
      headers,
      body: createBody(fields),
    },
  },
};
