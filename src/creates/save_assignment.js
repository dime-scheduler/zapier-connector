const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'sourceApp', label: 'Source App', type: "string" },
  { key: 'sourceType', label: 'Source Type', type: "string" },
  { key: 'appointmentId', label: 'Appointment Id', type: "string" },
  { key: 'resourceNo', label: 'Resource No', type: "string" },
  { key: 'appointmentGuid', label: 'Appointment Guid', type: "string" },
  { key: 'sentFromBackoffice', label: 'Sent From Backoffice', type: "boolean" },
];

const sample = {
  sourceApp: 'ZAPIER',
  sourceType: 'DEMO',
  subject: 'Hello world',
  resourceNo: 'OPTIMIZE_002',
  appointmentGuid: 'b0846a9e-ae8d-4d02-9f7a-49e50b9f3fc0'
};


module.exports = createAction(
  constants.endpoints.appointment.assignment,
  'save_assignment',
  'Assignment',
  'Save assignment',
  'Saves an assignment.',
  fields,
  sample
);