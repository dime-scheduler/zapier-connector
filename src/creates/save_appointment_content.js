const constants = require('../utils/constants.js');
const { createAction } = require('../utils/actionBuilder.js');

const fields = [
  { key: 'sourceApp', label: 'Source App', type: "string", required: false },
  { key: 'sourceType', label: 'Source Type', type: "string", required: false },
  { key: 'appointmentId', label: 'Appointment ID', type: "string", required: false },
  { key: 'appointmentGuid', label: 'Appointment GUID', type: "string", required: false },
  { key: 'subject', label: 'Subject', type: "string", required: false },
  { key: 'body', label: 'Body', type: "string", required: false },
];

module.exports = createAction(
  constants.endpoints.appointment.content,
  'save_appointment_content',
  'Appointment Content',
  'Set content of appointment',
  'Sets the content of the appointment.',
  fields
);