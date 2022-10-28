const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'sourceApp', label: 'Source App', type: "string" },
  { key: 'sourceType', label: 'Source Type', type: "string" },
  { key: 'appointmentId', label: 'Appointment Id', type: "string" },
  { key: 'quantity', label: 'Planning Qty', type: "number" },
  { key: 'appointmentGuid', label: 'Appointment Guid', type: "string" },
  { key: 'sentFromBackoffice', label: 'Sent From Backoffice', type: "string" },
];

const sample = {
  sourceApp: 'ZAPIER',
  sourceType: 'DEMO',
  planningQuantity: 25,
  appointmentGuid: 'b0846a9e-ae8d-4d02-9f7a-49e50b9f3fc0'
};

module.exports = createAction(
  constants.endpoints.appointment.planningQuantity,
  'save_appointment_planning_quantity',
  'Appointment Planning Quantity',
  'Set planning quantity of appointment',
  'Sets the planning quantity of the appointment.',
  fields,
  sample
);