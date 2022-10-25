const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

const fields = [
  { key: 'sourceApp', label: 'Source App', type: "string", required: false },
  { key: 'sourceType', label: 'Source Type', type: "string", required: false },
  { key: 'appointmentId', label: 'Appointment Id', type: "string", required: false },  
  { key: 'appointmentGuid', label: 'Appointment Guid', type: "string", required: false },
  { key: 'uri', label: 'URI', type: "string", required: false },
  { key: 'description', label: 'Description', type: "string", required: false },
];

module.exports = {
  key: 'save_appointment_uri',
  noun: 'Appointment URI',
  display: {
    label: 'Set uri of appointment',
    description: 'Sets the uri of the appointment.',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: createFields(fields),
    perform: {
      url: createUri(constants.endpoints.appointment.uri),
      method: 'POST',
      headers,
      body: createBody(fields),
    },
  },
};
