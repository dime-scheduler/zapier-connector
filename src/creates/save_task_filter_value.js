const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'sourceApp', label: 'SourceApp', type: "string" },
  { key: 'sourceType', label: 'SourceType', type: "string" },
  { key: 'jobNo', label: 'JobNo', type: "string" },
  { key: 'taskNo', label: 'TaskNo', type: "string" },
  { key: 'filterGroup', label: 'FilterGroup', type: "string" },
  { key: 'filterValue', label: 'FilterValue', type: "string" },
  { key: 'transferToTemp', label: 'TransferToTemp', type: "string" },
];

const sample = {
  sourceApp: 'ZAPIER',
  sourceType: 'DEMO',
  jobNo: 'DS_DEMO',
  taskNo: 'DS_DEMO_TEST',
  filterGroup: 'Zapier test',
  filterValue: 'Zapier test',
};

module.exports = createAction(
  constants.endpoints.task.filterValue,
  'save_task_filter_value',
  'Task Filter Value',
  'Save task filter value',
  'Saves a task filter value.',
  fields,
  sample
);
