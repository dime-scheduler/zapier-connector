const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

const fields = [
  { key: 'sourceApp', label: 'SourceApp', type: "string", required: false },
  { key: 'sourceType', label: 'SourceType', type: "string", required: false },
  { key: 'jobNo', label: 'JobNo', type: "string", required: false },
  { key: 'taskNo', label: 'TaskNo', type: "string", required: false },
  { key: 'uri', label: 'Uri', type: "string", required: false },
  { key: 'description', label: 'Description', type: "string", required: false },
];

module.exports = {
  key: 'save_task_uri',
  noun: 'Task URI',
  display: {
    label: 'Save task URI',
    description: 'Saves a task URL',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: createFields(fields),
    perform: {
      url: createUri(constants.endpoints.task.uri),
      method: 'POST',
      headers,
      body: createBody(fields),
    },
  },
};
