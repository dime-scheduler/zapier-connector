const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'sourceApp', label: 'Source App', type: "string", required: false },
  { key: 'sourceType', label: 'Source Type', type: "string", required: false },
  { key: 'appointmentId', label: 'Appointment Id', type: "string", required: false },
  { key: 'resourceNo', label: 'Resource No', type: "string", required: false },
  { key: 'appointmentGuid', label: 'Appointment Guid', type: "string", required: false },
  { key: 'sentFromBackoffice', label: 'Sent From Backoffice', type: "boolean", required: false },
];

module.exports = createAction(
  constants.endpoints.appointment.assignment,
  'save_assignment',
  'Assignment',
  'Save assignment',
  'Saves an assignment.',
  fields
);