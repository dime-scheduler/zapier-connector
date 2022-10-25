const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

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

module.exports = {
  key: 'save_resource_location',
  noun: 'Resource Location',
  display: {
    label: 'Save resource location',
    description: 'Saves the coordinates of a resource',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: createFields(fields),
    perform: {
      url: createUri(constants.endpoints.resource.location),
      method: 'POST',
      headers,
      body: createBody(fields),
    },
  },
};
