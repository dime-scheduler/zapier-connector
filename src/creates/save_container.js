const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'name', label: 'Name', type: "string" },
  { key: 'handleDate', label: 'HandleDate', type: "string" },
  { key: 'handleLocked', label: 'HandleLocked', type: "string" },
];

const sample = {
  name: 'Zapier test'
};

module.exports = createAction(
  constants.endpoints.container,
  'save_container',
  'Container',
  'Set a container',
  'Saves the container',
  fields,
  sample
);