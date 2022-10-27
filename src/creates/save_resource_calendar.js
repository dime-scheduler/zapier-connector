const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'code', label: 'Code', type: "string", required: false },
  { key: 'resourceNo', label: 'ResourceNo', type: "string", required: false },
  { key: 'calendarCode', label: 'CalendarCode', type: "string", required: false },
  { key: 'startDate', label: 'StartDate', type: "string", required: false },
  { key: 'endDate', label: 'EndDate', type: "string", required: false },
];

module.exports = createAction(
  constants.endpoints.resource.calendar,
  'save_resource_calendar',
  'Resource Calendar',
  'Save resource calendar',
  'Saves a resource calendar.',
  fields
);