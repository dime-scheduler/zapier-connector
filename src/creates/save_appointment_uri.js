const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'sourceApp', label: 'Source App', type: "string", required: false },
  { key: 'sourceType', label: 'Source Type', type: "string", required: false },
  { key: 'appointmentId', label: 'Appointment Id', type: "string", required: false },
  { key: 'appointmentGuid', label: 'Appointment Guid', type: "string", required: false },
  { key: 'uri', label: 'URI', type: "string", required: false },
  { key: 'description', label: 'Description', type: "string", required: false },
];

module.exports = createAction(
  constants.endpoints.appointment.uri,
  'save_appointment_uri',
  'Appointment URI',
  'Set uri of appointment',
  'Sets the uri of the appointment.',
  fields
);