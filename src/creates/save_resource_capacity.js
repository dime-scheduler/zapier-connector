const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'resourceNo', label: 'ResourceNo', type: "string" },
  { key: 'date', label: 'Date', type: "datetime" },
  { key: 'capacityInSeconds', label: 'CapacityInSeconds', type: "integer" },
  { key: 'quantity', label: 'Quantity', type: "string" },
  { key: 'unitOfMeasure', label: 'UnitOfMeasure', type: "string" },
  { key: 'unitOfMeasureConversion', label: 'UnitOfMeasureConversion', type: "string" },
];

const sample = {
  resourceNo: 'Zapier test',
  date: '2022-10-17',
  capacityInSeconds: 500,
  quantity: 50,
};

module.exports = createAction(
  constants.endpoints.resource.capacity,
  'save_resource_capacity',
  'Resource Capacity',
  'Save resource capacity',
  'Saves a resource capacity.',
  fields,
  sample
);