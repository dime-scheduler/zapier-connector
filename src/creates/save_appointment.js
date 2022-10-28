const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'appointmentId', label: 'AppointmentId', type: "string" },
  { key: 'appointmentGuid', label: 'AppointmentGuid', type: "string" },
  { key: 'sourceApp', label: 'SourceApp', type: "string" },
  { key: 'sourceType', label: 'SourceType', type: "string" },
  { key: 'jobNo', label: 'JobNo', type: "string" },
  { key: 'taskNo', label: 'TaskNo', type: "string" },
  { key: 'resourceNo', label: 'ResourceNo', type: "string" },
  { key: 'subject', label: 'Subject', type: "string" },
  { key: 'body', label: 'Body', type: "string" },
  { key: 'start', label: 'Start', type: "datetime" },
  { key: 'end', label: 'End', type: "datetime" },
  { key: 'timeMarker', label: 'TimeMarker', type: "string" },
  { key: 'category', label: 'Category', type: "string" },
  { key: 'importance', label: 'Importance', type: "integer" },
  { key: 'locked', label: 'Locked', type: "boolean" },
  { key: 'replaceResource', label: 'ReplaceResource', type: "boolean" },
  { key: 'backOfficeId', label: 'BackOfficeId', type: "string" },
  { key: 'backOfficeParentId', label: 'BackOfficeParentId', type: "string" },
  { key: 'unitOfMeasure', label: 'UnitOfMeasure', type: "string" },
  { key: 'unitOfMeasureConversion', label: 'UnitOfMeasureConversion', type: "string" },
  { key: 'planningQuantity', label: 'PlanningQuantity', type: "string" },
  { key: 'useFixedPlanningQuantity', label: 'UseFixedPlanningQuantity', type: "boolean" },
  { key: 'roundToUnitOfMeasure', label: 'RoundToUnitOfMeasure', type: "boolean" },
  { key: 'sentFromBackOffice', label: 'SentFromBackOffice', type: "boolean" },
];

const sample = {
  sourceApp: 'ZAPIER',
  sourceType: 'DEMO',
  jobNo: 'DS_DEMO',
  taskNo: 'DS_DEMO_TEST',
  subject: 'Hello world',
  resourceNo: 'OPTIMIZE_001',
  start: '2022-10-27T10:00:00Z',
  end: '2022-10-27T12:00:00Z',
  appointmentGuid: 'b0846a9e-ae8d-4d02-9f7a-49e50b9f3fc0'
};

module.exports = createAction(
  constants.endpoints.appointment.appointment,
  'save_appointment',
  'Appointment',
  'Save appointment',
  'Saves an appointment.',
  fields,
  sample
);