const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'sourceApp', label: 'Source App', type: "string" },
  { key: 'sourceType', label: 'Source Type', type: "string" },
  { key: 'appointmentId', label: 'Appointment Id', type: "string" },
  { key: 'appointmentGuid', label: 'Appointment Guid', type: "string" },
  { key: 'uri', label: 'URI', type: "string" },
  { key: 'description', label: 'Description', type: "string" },
];

const sample = {
  sourceApp: 'ZAPIER',
  sourceType: 'DEMO',
  uri: 'http://www.dimescheduler.com',
  description: 'Dime.Scheduler',
  appointmentGuid: 'b0846a9e-ae8d-4d02-9f7a-49e50b9f3fc0'
};

module.exports = createAction(
  constants.endpoints.appointment.uri,
  'save_appointment_uri',
  'Appointment URI',
  'Set uri of appointment',
  'Sets the uri of the appointment.',
  fields,
  sample
);