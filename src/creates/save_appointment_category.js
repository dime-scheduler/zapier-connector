const constants = require('../utils/constants.js');
const { createAction } = require('../utils/actionBuilder.js');

const fields = [
  { key: 'sourceApp', label: 'Source App', type: "string" },
  { key: 'sourceType', label: 'Source Type', type: "string" },
  { key: 'appointmentId', label: 'Appointment Id', type: "string" },
  { key: 'category', label: 'Category', type: "string" },
  { key: 'appointmentGuid', label: 'Appointment Guid', type: "string" },
  { key: 'sentFromBackoffice', label: 'Sent From Backoffice', type: "boolean" },
];

const sample = {
  sourceApp: 'ZAPIER',
  sourceType: 'CONTACT',
  category: 'Zapier test',
  appointmentGuid: 'b0846a9e-ae8d-4d02-9f7a-49e50b9f3fc0'
};

module.exports = createAction(
  constants.endpoints.appointment.category,
  'save_appointment_category',
  'Appointment Category',
  'Set category of appointment',
  'Sets the category of the appointment.',
  fields,
  sample
);