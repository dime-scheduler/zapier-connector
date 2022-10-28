const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'sourceApp', label: 'SourceApp', type: "string" },
  { key: 'sourceType', label: 'SourceType', type: "string" },
  { key: 'appointmentId', label: 'AppointmentId', type: "integer" },
  { key: 'connectorId', label: 'ConnectorId', type: "string" },
  { key: 'type', label: 'Type', type: "integer" },
  { key: 'code', label: 'Code', type: "string" },
  { key: 'text', label: 'Text', type: "string" },
  { key: 'date', label: 'Date', type: "string" },
  { key: 'jobNo', label: 'JobNo', type: "string" },
  { key: 'taskNo', label: 'TaskNo', type: "string" },
  { key: 'appointmentGuid', label: 'AppointmentGuid', type: "string" },
  { key: 'sentFromBackOffice', label: 'SentFromBackOffice', type: "string" },
];

const sample = {
  sourceApp: 'ZAPIER',
  sourceType: 'DEMO',
  type: 1,
  code: 'CODE_001',
  text: 'Hi from Zapier test!',
  date: '2022-10-26T15:30:00.00Z'
};

module.exports = createAction(
  constants.endpoints.notification,
  'save_notification',
  'Notification',
  'Save notification',
  'Saves a notification',
  fields,
  sample
);