const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'sourceApp', label: 'SourceApp', type: "string", required: false },
  { key: 'sourceType', label: 'SourceType', type: "string", required: false },
  { key: 'jobNo', label: 'JobNo', type: "string", required: false },
  { key: 'taskNo', label: 'TaskNo', type: "string", required: false },
  { key: 'name', label: 'Name', type: "string", required: false },
  { key: 'index', label: 'Index', type: "string", required: false },
];

module.exports = createAction(
  constants.endpoints.task.container,
  'save_task_container',
  'Task Container',
  'Save task container',
  'Saves a task container.',
  fields
);