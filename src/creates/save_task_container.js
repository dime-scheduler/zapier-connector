const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'sourceApp', label: 'SourceApp', type: "string" },
  { key: 'sourceType', label: 'SourceType', type: "string" },
  { key: 'jobNo', label: 'JobNo', type: "string" },
  { key: 'taskNo', label: 'TaskNo', type: "string" },
  { key: 'name', label: 'Name', type: "string" },
  { key: 'index', label: 'Index', type: "string" },
];

const sample = {
  sourceApp: 'ZAPIER',
  sourceType: 'DEMO',
  jobNo: 'DS_DEMO',
  taskNo: 'DS_DEMO_TEST',
  name: 'Zapier test',
};

module.exports = createAction(
  constants.endpoints.task.container,
  'save_task_container',
  'Task Container',
  'Save task container',
  'Saves a task container.',
  fields,
  sample
);