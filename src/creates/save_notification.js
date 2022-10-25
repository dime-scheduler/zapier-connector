const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

const fields = [
  { key: 'sourceApp', label: 'SourceApp', type: "string", required: false },
  { key: 'sourceType', label: 'SourceType', type: "string", required: false },
  { key: 'appointmentId', label: 'AppointmentId', type: "string", required: false },
  { key: 'connectorId', label: 'ConnectorId', type: "string", required: false },
  { key: 'type', label: 'Type', type: "string", required: false },
  { key: 'code', label: 'Code', type: "string", required: false },
  { key: 'text', label: 'Text', type: "string", required: false },
  { key: 'date', label: 'Date', type: "string", required: false },
  { key: 'jobNo', label: 'JobNo', type: "string", required: false },
  { key: 'taskNo', label: 'TaskNo', type: "string", required: false },
  { key: 'appointmentGuid', label: 'AppointmentGuid', type: "string", required: false },
  { key: 'sentFromBackOffice', label: 'SentFromBackOffice', type: "string", required: false },
];

module.exports = {
  key: 'save_notification',
  noun: 'Notification',
  display: {
    label: 'Save notification',
    description: 'Saves a notification',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: createFields(fields),
    perform: {
      url: createUri(constants.endpoints.caption),
      method: 'POST',
      headers,
      body: createBody(fields),
    },
  },
};
