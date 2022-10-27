const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'context', label: 'Context', type: "string", required: false },
  { key: 'sourceTable', label: 'Source Table', type: "string", required: false },
  { key: 'fieldName', label: 'Field Name', type: "string", required: false },
  { key: 'language', label: 'Language', type: "string", required: false },
  { key: 'text', label: 'Text', type: "string", required: false },
];

module.exports = createAction(
  constants.endpoints.caption,
  'save_caption',
  'Caption',
  'Save caption',
  'Saves a caption.',
  fields
);