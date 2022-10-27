const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'sourceApp', label: 'Source App', type: "string", required: false },
  { key: 'sourceType', label: 'Source Type', type: "string", required: false },
  { key: 'appointmentId', label: 'Appointment Id', type: "string", required: false },
  { key: 'timeMarker', label: 'Time Marker', type: "string", required: false },
  { key: 'appointmentGuid', label: 'Appointment Guid', type: "string", required: false },
  { key: 'sentFromBackoffice', label: 'Sent From Backoffice', type: "string", required: false },
];

module.exports = createAction(
  constants.endpoints.appointment.timeMarker,
  'save_appointment_time_marker',
  'Appointment Time Marker',
  'Set time marker of appointment',
  'Sets the time marker of the appointment.',
  fields
);