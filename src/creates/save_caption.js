const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'context', label: 'Context', type: "string" },
  { key: 'sourceTable', label: 'Source Table', type: "string" },
  { key: 'fieldName', label: 'Field Name', type: "string" },
  { key: 'language', label: 'Language', type: "string" },
  { key: 'text', label: 'Text', type: "string" },
];

const sample = {
  context: 1,
  sourceTable: 'JOB',
  fieldName: 'SourceApp',
  language: 'nl',
  text: 'Hello world'
};

module.exports = createAction(
  constants.endpoints.caption,
  'save_caption',
  'Caption',
  'Save caption',
  'Saves a caption.',
  fields,
  sample
);