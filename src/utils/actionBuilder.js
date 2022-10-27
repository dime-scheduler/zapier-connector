const constants = require('./constants.js');
const headers = require('./auth.js');

const createUri = (endpoint, v = constants.version) => constants.baseUri + v + "/" + endpoint;

const createField = (key, label, type = "string", required = false) => ({ key, label, type, required, list: false, altersDynamicFields: false });

const createFields = (fields) => {
    var arr = [];
    for (const field of fields)
        arr.push(createField(field.key, field.label, field.type, field.required));

    return arr;
}

const createBody = (fields) => {
    const dict = {};

    for (const field of fields)
        dict[field.key] = `{{bundle.inputData.${field.value ?? field.key}}}`

    return dict;
}

const createAction = (endpoint, key, noun, label, description, fields) => ({
    key: key,
    noun: noun,
    display: {
        label: label,
        description: description,
        hidden: false,
        important: true,
    },
    operation: {
        inputFields: createFields(fields),
        perform: {
            url: createUri(endpoint),
            method: 'POST',
            headers,
            removeMissingValuesFrom: { params: true, body: true },
            body: createBody(fields),
        },
    },
});

module.exports = {
    createAction,
    createUri,
    createFields,
    createField,
    createBody
};