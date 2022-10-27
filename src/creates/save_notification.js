const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'sourceApp', label: 'SourceApp', type: "string", required: false },
  { key: 'sourceType', label: 'SourceType', type: "string", required: false },
  { key: 'appointmentId', label: 'AppointmentId', type: "integer", required: false },
  { key: 'connectorId', label: 'ConnectorId', type: "string", required: false },
  { key: 'type', label: 'Type', type: "integer", required: false },
  { key: 'code', label: 'Code', type: "string", required: false },
  { key: 'text', label: 'Text', type: "string", required: false },
  { key: 'date', label: 'Date', type: "string", required: false },
  { key: 'jobNo', label: 'JobNo', type: "string", required: false },
  { key: 'taskNo', label: 'TaskNo', type: "string", required: false },
  { key: 'appointmentGuid', label: 'AppointmentGuid', type: "string", required: false },
  { key: 'sentFromBackOffice', label: 'SentFromBackOffice', type: "string", required: false },
];

module.exports = createAction(
  constants.endpoints.notification,
  'save_notification',
  'Notification',
  'Save notification',
  'Saves a notification',
  fields
);