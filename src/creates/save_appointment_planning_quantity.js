const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

const fields = [
  { key: 'sourceApp', label: 'Source App', type: "string", required: true },
  { key: 'sourceType', label: 'Source Type', type: "string", required: true },
  { key: 'appointmentId', label: 'Appointment Id', type: "string", required: true },
  { key: 'planningQty', label: 'Planning Qty', type: "string", required: true },
  { key: 'appointmentGuid', label: 'Appointment Guid', type: "string", required: true },
  { key: 'sentFromBackoffice', label: 'Sent From Backoffice', type: "string", required: true },
];

module.exports = {
  key: 'save_appointment_planning_quantity',
  noun: 'Appointment Planning Quantity',
  display: {
    label: 'Set planning quantity of appointment',
    description: 'Sets the planning quantity of the appointment.',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: createFields(fields),
    perform: {
      url: createUri(constants.endpoints.appointment.planningQuantity),
      method: 'POST',
      headers,
      body: createBody(fields),
    },
  },
};
