const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'resourceno', label: 'Resourceno', type: "string", required: false },
  { key: 'gpsTrackingResourceNo', label: 'GpsTrackingResourceNo', type: "string", required: false },
  { key: 'latitude', label: 'Latitude', type: "string", required: false },
  { key: 'longitude', label: 'Longitude', type: "string", required: false },
  { key: 'speed', label: 'Speed', type: "string", required: false },
  { key: 'date', label: 'Date', type: "string", required: false },
  { key: 'rowId', label: 'RowId', type: "string", required: false },
  { key: 'power', label: 'Power', type: "string", required: false },
];

module.exports = createAction(
  constants.endpoints.resource.location,
  'save_resource_location',
  'Resource Location',
  'Save resource location',
  'Saves a resource location.',
  fields
);
