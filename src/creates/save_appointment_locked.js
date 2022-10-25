const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

const fields = [
  { key: 'sourceApp', label: 'Source App', type: "string", required: false },
  { key: 'sourceType', label: 'Source Type', type: "string", required: false },
  { key: 'appointmentId', label: 'Appointment Id', type: "string", required: false },
  { key: 'locked', label: 'Locked', type: "boolean", required: false },
  { key: 'appointmentGuid', label: 'Appointment Guid', type: "string", required: false },
  { key: 'sentFromBackoffice', label: 'Sent From Backoffice', type: "boolean", required: false },
];

module.exports = {
  key: 'save_appointment_locked',
  noun: 'Appointment Locked',
  display: {
    label: 'Set locked of appointment',
    description: 'Sets the locked status of the appointment.',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: createFields(fields),
    perform: {
      url: createUri(constants.endpoints.appointment.locked),
      method: 'POST',
      headers,
      body: createBody(fields),
    },
  },
};
