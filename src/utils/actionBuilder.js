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

const titleCase = (str) => {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

const createAction = (endpoint, key, noun, label, description, fields, sample) => ({
    key: key,
    noun: noun,
    display: {
        label: titleCase(label),
        description: description,
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
        sample: sample
    },
});

module.exports = {
    createAction,
    createUri,
    createFields,
    createField,
    createBody
};