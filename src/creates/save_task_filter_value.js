const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'sourceApp', label: 'SourceApp', type: "string", required: false },
  { key: 'sourceType', label: 'SourceType', type: "string", required: false },
  { key: 'jobNo', label: 'JobNo', type: "string", required: false },
  { key: 'taskNo', label: 'TaskNo', type: "string", required: false },
  { key: 'filterGroup', label: 'FilterGroup', type: "string", required: false },
  { key: 'filterValue', label: 'FilterValue', type: "string", required: false },
  { key: 'transferToTemp', label: 'TransferToTemp', type: "string", required: false },
];

module.exports = createAction(
  constants.endpoints.task.filterValue,
  'save_task_filter_value',
  'Task Filter Value',
  'Save task filter value',
  'Saves a task filter value.',
  fields
);
