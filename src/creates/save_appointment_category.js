const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

const fields = [
  { key: 'sourceApp', label: 'Source App', type: "string", required: true },
  { key: 'sourceType', label: 'Source Type', type: "string", required: true },
  { key: 'appointmentId', label: 'Appointment Id', type: "string", required: true },
  { key: 'category', label: 'Category', type: "string", required: true },
  { key: 'appointmentGuid', label: 'Appointment Guid', type: "string", required: true },
  { key: 'sentFromBackoffice', label: 'Sent From Backoffice', type: "string", required: true },
];

module.exports = {
  key: 'save_appointment_category',
  noun: 'Appointment Category',
  display: {
    label: 'Set category of appointment',
    description: 'Sets the category of the appointment.',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: createFields(fields),
    perform: {
      url: createUri(constants.endpoints.appointment.category),
      method: 'POST',
      headers,
      body: createBody(fields),
    },
  },
};
