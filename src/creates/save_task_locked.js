const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'sourceApp', label: 'SourceApp', type: "string" },
  { key: 'sourceType', label: 'SourceType', type: "string" },
  { key: 'jobNo', label: 'JobNo', type: "string" },
  { key: 'taskNo', label: 'TaskNo', type: "string" },
  { key: 'locked', label: 'Locked', type: "boolean" },
  { key: 'sentFromBackOffice', label: 'SentFromBackOffice', type: "boolean" },
];

const sample = {
  sourceApp: 'ZAPIER',
  sourceType: 'DEMO',
  jobNo: 'DS_DEMO',
  taskNo: 'DS_DEMO_TEST',
  locked: true
};

module.exports = createAction(
  constants.endpoints.task.locked,
  'save_task_locked',
  'Task Locked',
  'Save task locked',
  'Saves a task locked.',
  fields,
  sample
);