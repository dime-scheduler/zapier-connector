const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'resourceno', label: 'Resourceno', type: "string" },
  { key: 'gpsTrackingResourceNo', label: 'GpsTrackingResourceNo', type: "string" },
  { key: 'latitude', label: 'Latitude', type: "string" },
  { key: 'longitude', label: 'Longitude', type: "string" },
  { key: 'speed', label: 'Speed', type: "string" },
  { key: 'date', label: 'Date', type: "string" },
  { key: 'rowId', label: 'RowId', type: "string" },
  { key: 'power', label: 'Power', type: "string" },
];

const sample = {
  resourceno: 'Zapier test',
  latitude: "0",
  longitude: "0"
};

module.exports = createAction(
  constants.endpoints.resource.location,
  'save_resource_location',
  'Resource Location',
  'Save resource location',
  'Saves a resource location.',
  fields,
  sample
);
