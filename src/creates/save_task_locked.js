const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

const fields = [
  { key: 'sourceApp', label: 'SourceApp', type: "string", required: false },
  { key: 'sourceType', label: 'SourceType', type: "string", required: false },
  { key: 'jobNo', label: 'JobNo', type: "string", required: false },
  { key: 'taskNo', label: 'TaskNo', type: "string", required: false },
  { key: 'locked', label: 'Locked', type: "string", required: false },
  { key: 'sentFromBackOffice', label: 'SentFromBackOffice', type: "string", required: false },
];

module.exports = {
  key: 'save_task_locked',
  noun: 'Task Locked',
  display: {
    label: 'Save task locked',
    description: 'Locks or unlocks the task',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: createFields(fields),
    perform: {
      url: createUri(constants.endpoints.task.locked),
      method: 'POST',
      headers,
      body: createBody(fields),
    },
  },
};
