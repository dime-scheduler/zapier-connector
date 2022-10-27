const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'sourceApp', label: 'Source App', type: "string", required: false },
  { key: 'sourceType', label: 'Source Type', type: "string", required: false },
  { key: 'appointmentId', label: 'Appointment ID', type: "integer", required: false },
  { key: 'appointmentGuid', label: 'Appointment GUID', type: "string", required: false },
  { key: 'importance', label: 'Importance', type: "integer", required: false }
];

module.exports = createAction(
  constants.endpoints.appointment.importance,
  'save_appointment_importance',
  'Appointment Importance',
  'Set importance of appointment',
  'Sets the importance of the appointment',
  fields
);