const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'sourceApp', label: 'Source App', type: "string" },
  { key: 'sourceType', label: 'Source Type', type: "string" },
  { key: 'appointmentId', label: 'Appointment ID', type: "integer" },
  { key: 'appointmentGuid', label: 'Appointment GUID', type: "string" },
  { key: 'importance', label: 'Importance', type: "integer" }
];

const sample = {
  sourceApp: 'ZAPIER',
  sourceType: 'DEMO',
  importance: 2,
  appointmentGuid: 'b0846a9e-ae8d-4d02-9f7a-49e50b9f3fc0'
};

module.exports = createAction(
  constants.endpoints.appointment.importance,
  'save_appointment_importance',
  'Appointment Importance',
  'Set Appointment Importance',
  'Sets the importance of the appointment',
  fields,
  sample
);