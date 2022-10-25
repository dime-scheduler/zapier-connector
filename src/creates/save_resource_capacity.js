const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

const fields = [
  { key: 'resourceNo', label: 'ResourceNo', type: "string", required: false },
  { key: 'date', label: 'Date', type: "string", required: false },
  { key: 'capacityInSeconds', label: 'CapacityInSeconds', type: "string", required: false },
  { key: 'quantity', label: 'Quantity', type: "string", required: false },
  { key: 'unitOfMeasure', label: 'UnitOfMeasure', type: "string", required: false },
  { key: 'unitOfMeasureConversion', label: 'UnitOfMeasureConversion', type: "string", required: false },
];

module.exports = {
  key: 'save_resource_capacity',
  noun: 'Resource Capacity',
  display: {
    label: 'Save resource capacity',
    description: 'Saves a capacity entry for a resource',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: createFields(fields),
    perform: {
      url: createUri(constants.endpoints.resource.capacity),
      method: 'POST',
      headers,
      body: createBody(fields),
    },
  },
};
