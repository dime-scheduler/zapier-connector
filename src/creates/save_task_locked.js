const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'sourceApp', label: 'SourceApp', type: "string", required: false },
  { key: 'sourceType', label: 'SourceType', type: "string", required: false },
  { key: 'jobNo', label: 'JobNo', type: "string", required: false },
  { key: 'taskNo', label: 'TaskNo', type: "string", required: false },
  { key: 'locked', label: 'Locked', type: "boolean", required: false },
  { key: 'sentFromBackOffice', label: 'SentFromBackOffice', type: "boolean", required: false },
];

module.exports = createAction(
  constants.endpoints.task.locked,
  'save_task_locked',
  'Task Locked',
  'Save task locked',
  'Saves a task locked.',
  fields
);