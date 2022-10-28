const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
    { key: 'sourceApp', label: 'Source App', type: "string" },
    { key: 'sourceType', label: 'Source Type', type: "string" },
    { key: 'uriType', label: 'Url Type', type: "string" },
    { key: 'uri', label: 'Url', type: "string", required: true },
    { key: 'description', label: 'Description', type: "string" },
    { key: 'default', label: 'Is default', type: "boolean" },
];

const sample = {
    sourceApp: 'ZAPIER',
    sourceType: 'CONTACT',
    uriType: '1',
    uri: 'https://www.dimescheduler.com',
    description: 'Dime.Scheduler website'
};

module.exports = createAction(
    constants.endpoints.actionUri,
    'save_action_uri',
    'Action URI',
    'Set Action URL',
    'Saves the action URL',
    fields,
    sample
);