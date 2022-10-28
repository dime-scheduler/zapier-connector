const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'code', label: 'Code', type: "string" },
  { key: 'resourceNo', label: 'ResourceNo', type: "string" },
  { key: 'calendarCode', label: 'CalendarCode', type: "string" },
  { key: 'startDate', label: 'StartDate', type: "string" },
  { key: 'endDate', label: 'EndDate', type: "string" },
];

const sample = {
  resourceNo: 'Zapier test',
  calendarCode: 'Company Calendar',
  resourceCalendarCode: 'Zapier test',
  startDate: '2022-10-01',
  endDate: '2022-11-01'
};

module.exports = createAction(
  constants.endpoints.resource.calendar,
  'save_resource_calendar',
  'Resource Calendar',
  'Save resource calendar',
  'Saves a resource calendar.',
  fields,
  sample
);