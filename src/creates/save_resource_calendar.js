const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

const fields = [
  { key: 'code', label: 'Code', type: "string", required: false },
  { key: 'resourceNo', label: 'ResourceNo', type: "string", required: false },
  { key: 'calendarCode', label: 'CalendarCode', type: "string", required: false },
  { key: 'startDate', label: 'StartDate', type: "string", required: false },
  { key: 'endDate', label: 'EndDate', type: "string", required: false },
];

module.exports = {
  key: 'save_resource_calendar',
  noun: 'Resource Calendar',
  display: {
    label: 'Save resource calendar',
    description: 'Saves a resource calendar',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: createFields(fields),
    perform: {
      url: createUri(constants.endpoints.resource.calendar),
      method: 'POST',
      headers,
      body: createBody(fields),
    },
  },
};
