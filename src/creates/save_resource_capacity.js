const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'resourceNo', label: 'ResourceNo', type: "string", required: false },
  { key: 'date', label: 'Date', type: "datetime", required: false },
  { key: 'capacityInSeconds', label: 'CapacityInSeconds', type: "integer", required: false },
  { key: 'quantity', label: 'Quantity', type: "string", required: false },
  { key: 'unitOfMeasure', label: 'UnitOfMeasure', type: "string", required: false },
  { key: 'unitOfMeasureConversion', label: 'UnitOfMeasureConversion', type: "string", required: false },
];

module.exports = createAction(
  constants.endpoints.resource.capacity,
  'save_resource_capacity',
  'Resource Capacity',
  'Save resource capacity',
  'Saves a resource capacity.',
  fields
);