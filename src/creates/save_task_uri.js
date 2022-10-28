const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'sourceApp', label: 'SourceApp', type: "string", required: true },
  { key: 'sourceType', label: 'SourceType', type: "string", required: true },
  { key: 'jobNo', label: 'JobNo', type: "string", required: true },
  { key: 'taskNo', label: 'TaskNo', type: "string", required: true },
  { key: 'uri', label: 'Uri', type: "string", required: true },
  { key: 'description', label: 'Description', type: "string", required: true },
];

const sample = {
  sourceApp: 'ZAPIER',
  sourceType: 'DEMO',
  jobNo: 'DS_DEMO',
  taskNo: 'DS_DEMO_TEST',
  uri: 'http://www.dimescheduler.com',
  description: 'Dime.Scheduler'
};

module.exports = createAction(
  constants.endpoints.task.uri,
  'save_task_uri',
  'Task URI',
  'Save task URI',
  'Saves a task URI.',
  fields,
  sample
);