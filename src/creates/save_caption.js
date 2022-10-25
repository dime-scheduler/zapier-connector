const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

const fields = [
  { key: 'context', label: 'Context', type: "string", required: false },
  { key: 'sourceTable', label: 'Source Table', type: "string", required: false },
  { key: 'fieldName', label: 'Field Name', type: "string", required: false },
  { key: 'language', label: 'Language', type: "string", required: false },
  { key: 'text', label: 'Text', type: "string", required: false },
];

module.exports = {
  key: 'save_caption',
  noun: 'Caption',
  display: {
    label: 'Save caption',
    description: 'Saves a caption',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: createFields(fields),
    perform: {
      url: createUri(constants.endpoints.caption),
      method: 'POST',
      headers,
      body: createBody(fields),
    },
  },
};
