const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'sourceApp', label: 'Source App', type: "string", required: false },
  { key: 'sourceType', label: 'Source Type', type: "string", required: false },
  { key: 'appointmentId', label: 'Appointment Id', type: "string", required: false },
  { key: 'quantity', label: 'Planning Qty', type: "number", required: false },
  { key: 'appointmentGuid', label: 'Appointment Guid', type: "string", required: false },
  { key: 'sentFromBackoffice', label: 'Sent From Backoffice', type: "string", required: false },
];

module.exports = createAction(
  constants.endpoints.appointment.planningQuantity,
  'save_appointment_planning_quantity',
  'Appointment Planning Quantity',
  'Set planning quantity of appointment',
  'Sets the planning quantity of the appointment.',
  fields
);