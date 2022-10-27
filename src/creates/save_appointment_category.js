const constants = require('../utils/constants.js');
const { createAction } = require('../utils/actionBuilder.js');

const fields = [
  { key: 'sourceApp', label: 'Source App', type: "string", required: false },
  { key: 'sourceType', label: 'Source Type', type: "string", required: false },
  { key: 'appointmentId', label: 'Appointment Id', type: "string", required: false },
  { key: 'category', label: 'Category', type: "string", required: false },
  { key: 'appointmentGuid', label: 'Appointment Guid', type: "string", required: false },
  { key: 'sentFromBackoffice', label: 'Sent From Backoffice', type: "boolean", required: false },
];

module.exports = createAction(
  constants.endpoints.appointment.category,
  'save_appointment_category',
  'Appointment Category',
  'Set category of appointment',
  'Sets the category of the appointment.',
  fields
);