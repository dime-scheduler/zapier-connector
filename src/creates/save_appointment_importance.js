const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

const fields = [
  { key: 'sourceApp', label: 'Source App', type: "string", required: false },
  { key: 'sourceType', label: 'Source Type', type: "string", required: false },
  { key: 'appointmentId', label: 'Appointment ID', type: "integer", required: false },
  { key: 'appointmentGuid', label: 'Appointment GUID', type: "string", required: false },
  { key: 'importance', label: 'Importance', type: "integer", required: false }
];

module.exports = {
  key: 'save_appointment_importance',
  noun: 'Appointment Importance',
  display: {
    label: 'Set importance of appointment',
    description: 'Sets the importance of the appointment.',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: createFields(fields),
    perform: {
      url: createUri(constants.endpoints.appointment.importance),
      method: 'POST',
      headers,
      body: createBody(fields),
    },
  },
};
