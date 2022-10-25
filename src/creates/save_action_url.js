const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

const fields = [
    { key: 'sourceApp', label: 'Source App', type: "string", required: false },
    { key: 'sourceType', label: 'Source Type', type: "string", required: false },
    { key: 'uriType', label: 'Url Type', type: "string", required: false },
    { key: 'uri', label: 'Url', type: "string", required: false },
    { key: 'description', label: 'Url Desc', type: "string", required: false },
    { key: 'default', label: 'Default Url', type: "boolean", required: false },
];

module.exports = {
    key: 'save_action_uri',
    noun: 'Action URI',
    display: {
        label: 'Set an action URL',
        description: 'Saves the action URL.',
        hidden: false,
        important: true,
    },
    operation: {
        inputFields: createFields(fields),
        perform: {
            url: createUri(constants.endpoints.actionUri),
            method: 'POST',
            headers,
            body: createBody(fields),
        },
    },
};
