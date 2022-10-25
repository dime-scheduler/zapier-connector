const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

const fields = [
  { key: 'sourceApp', label: 'SourceApp', type: "string", required: false },
  { key: 'sourceType', label: 'SourceType', type: "string", required: false },
  { key: 'jobNo', label: 'JobNo', type: "string", required: false },
  { key: 'taskNo', label: 'TaskNo', type: "string", required: false },
  { key: 'name', label: 'Name', type: "string", required: false },
  { key: 'index', label: 'Index', type: "string", required: false },
];

module.exports = {
  key: 'save_task_container',
  noun: 'Task Container',
  display: {
    label: 'Save task container',
    description: 'Saves a task container',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: createFields(fields),
    perform: {
      url: createUri(constants.endpoints.task.container),
      method: 'POST',
      headers,
      body: createBody(fields),
    },
  },
};
