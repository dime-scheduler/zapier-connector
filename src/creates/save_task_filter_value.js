const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

const fields = [
  { key: 'sourceApp', label: 'SourceApp', type: "string", required: false },
  { key: 'sourceType', label: 'SourceType', type: "string", required: false },
  { key: 'jobNo', label: 'JobNo', type: "string", required: false },
  { key: 'taskNo', label: 'TaskNo', type: "string", required: false },
  { key: 'filterGroup', label: 'FilterGroup', type: "string", required: false },
  { key: 'filterValue', label: 'FilterValue', type: "string", required: false },
  { key: 'transferToTemp', label: 'TransferToTemp', type: "string", required: false },
];

module.exports = {
  key: 'save_task_filter_value',
  noun: 'Task Filter Value',
  display: {
    label: 'Save task filter value',
    description: 'Saves a filter value for this task',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: createFields(fields),
    perform: {
      url: createUri(constants.endpoints.task.filterValue),
      method: 'POST',
      headers,
      body: createBody(fields),
    },
  },
};
