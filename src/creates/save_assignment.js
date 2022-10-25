const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

const fields = [
  { key: 'sourceApp', label: 'Source App', type: "string", required: false },
  { key: 'sourceType', label: 'Source Type', type: "string", required: false },
  { key: 'appointmentId', label: 'Appointment Id', type: "string", required: false },
  { key: 'resourceNo', label: 'Resource No', type: "string", required: false },
  { key: 'appointmentGuid', label: 'Appointment Guid', type: "string", required: false },
  { key: 'sentFromBackoffice', label: 'Sent From Backoffice', type: "string", required: false },
];

module.exports = {
  key: 'save_assignment',
  noun: 'Assignment',
  display: {
    label: 'Save assignment',
    description: 'Saves an assignment',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: createFields(fields),
    perform: {
      url: createUri(constants.endpoints.appointment.assignment),
      method: 'POST',
      headers,
      body: createBody(fields),
    },
  },
};
