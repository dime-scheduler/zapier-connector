const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
    { key: 'sourceApp', label: 'Source App', type: "string", required: false },
    { key: 'sourceType', label: 'Source Type', type: "string", required: false },
    { key: 'uriType', label: 'Url Type', type: "string", required: false },
    { key: 'uri', label: 'Url', type: "string", required: false },
    { key: 'description', label: 'Url Desc', type: "string", required: false },
    { key: 'default', label: 'Default Url', type: "boolean", required: false },
];

module.exports = createAction(
    constants.endpoints.actionUri,
    'save_action_uri',
    'Action URI',
    'Set an action URL',
    'Saves the action URL',
    fields
);