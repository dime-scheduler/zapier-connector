const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'name', label: 'Name', type: "string", required: false },
  { key: 'handleDate', label: 'HandleDate', type: "string", required: false },
  { key: 'handleLocked', label: 'HandleLocked', type: "string", required: false },
];

module.exports = createAction(
  constants.endpoints.container,
  'save_container',
  'Container',
  'Set a container',
  'Saves the container',
  fields
);