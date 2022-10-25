const constants = require('./constants.js');

const createUri = (endpoint, v = constants.version) => constants.baseUri + v + "/" + endpoint;

const createField = (key, label, type = "string", required = false) => ({ key, label, type, required, list: false, altersDynamicFields: false });

const createFields = (fields) => {
    var arr = [];

    for (const field of fields)
        arr.push(createField(field.key, field.label, field.type, field.required));

    return arr;
}

const createBody = (fields) => {
    const dict = [];

    for (const field of fields)
        dict.push({
            key: field.key,
            value: `'{{bundle.inputData.${field.value ?? field.key}}}'`
        });

    return dict;
}

module.exports = {
    createUri,
    createFields,
    createField,
    createBody
};