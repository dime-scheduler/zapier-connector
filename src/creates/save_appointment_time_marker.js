const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'sourceApp', label: 'Source App', type: "string" },
  { key: 'sourceType', label: 'Source Type', type: "string" },
  { key: 'appointmentId', label: 'Appointment Id', type: "string" },
  { key: 'timeMarker', label: 'Time Marker', type: "string" },
  { key: 'appointmentGuid', label: 'Appointment Guid', type: "string" },
  { key: 'sentFromBackoffice', label: 'Sent From Backoffice', type: "string" },
];

const sample = {
  sourceApp: 'ZAPIER',
  sourceType: 'DEMO',
  timeMarker: 'Zapier test',
  appointmentGuid: 'b0846a9e-ae8d-4d02-9f7a-49e50b9f3fc0'
};

module.exports = createAction(
  constants.endpoints.appointment.timeMarker,
  'save_appointment_time_marker',
  'Appointment Time Marker',
  'Set time marker of appointment',
  'Sets the time marker of the appointment.',
  fields,
  sample
);