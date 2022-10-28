const constants = require('../utils/constants.js');
const { createAction } = require('../utils/actionBuilder.js');

const fields = [
  { key: 'sourceApp', label: 'Source App', type: "string" },
  { key: 'sourceType', label: 'Source Type', type: "string" },
  { key: 'appointmentId', label: 'Appointment ID', type: "string" },
  { key: 'appointmentGuid', label: 'Appointment GUID', type: "string" },
  { key: 'subject', label: 'Subject', type: "string" },
  { key: 'body', label: 'Body', type: "string" },
];

const sample = {
  sourceApp: 'ZAPIER',
  sourceType: 'DEMO',
  subject: 'Zapier test',
  appointmentGuid: 'b0846a9e-ae8d-4d02-9f7a-49e50b9f3fc0'
};

module.exports = createAction(
  constants.endpoints.appointment.content,
  'save_appointment_content',
  'Appointment Content',
  'Set Appointment Content',
  'Sets the content of the appointment.',
  fields,
  sample
);