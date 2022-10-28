const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'sourceApp', label: 'Source App', type: "string" },
  { key: 'sourceType', label: 'Source Type', type: "string" },
  { key: 'appointmentId', label: 'Appointment Id', type: "string" },
  { key: 'locked', label: 'Locked', type: "boolean" },
  { key: 'appointmentGuid', label: 'Appointment Guid', type: "string" },
  { key: 'sentFromBackoffice', label: 'Sent From Backoffice', type: "boolean" },
];

const sample = {
  sourceApp: 'ZAPIER',
  sourceType: 'DEMO',
  locked: true,
  appointmentGuid: 'b0846a9e-ae8d-4d02-9f7a-49e50b9f3fc0'
};

module.exports = createAction(
  constants.endpoints.appointment.locked,
  'save_appointment_locked',
  'Appointment Locked',
  'Lock appointment',
  'Sets the locked status of the appointment.',
  fields,
  sample
);