const headers = require('../utils/auth.js');
const constants = require('../utils/constants.js');
const { createUri, createFields, createBody } = require('../utils/actionHelpers.js');

const fields = [
  { key: 'appointmentId', label: 'AppointmentId', type: "string", required: false },
  { key: 'appointmentGuid', label: 'AppointmentGuid', type: "string", required: false },
  { key: 'sourceApp', label: 'SourceApp', type: "string", required: false },
  { key: 'sourceType', label: 'SourceType', type: "string", required: false },
  { key: 'jobNo', label: 'JobNo', type: "string", required: false },
  { key: 'taskNo', label: 'TaskNo', type: "string", required: false },
  { key: 'resourceNo', label: 'ResourceNo', type: "string", required: false },
  { key: 'subject', label: 'Subject', type: "string", required: false },
  { key: 'body', label: 'Body', type: "string", required: false },
  { key: 'start', label: 'Start', type: "datetime", required: false },
  { key: 'end', label: 'End', type: "datetime", required: false },
  { key: 'isAllDay', label: 'IsAllDay', type: "boolean", required: false },
  { key: 'timeMarker', label: 'TimeMarker', type: "string", required: false },
  { key: 'category', label: 'Category', type: "string", required: false },
  { key: 'importance', label: 'Importance', type: "integer", required: false },
  { key: 'locked', label: 'Locked', type: "boolean", required: false },
  { key: 'replaceResource', label: 'ReplaceResource', type: "boolean", required: false },
  { key: 'backOfficeId', label: 'BackOfficeId', type: "string", required: false },
  { key: 'backOfficeParentId', label: 'BackOfficeParentId', type: "string", required: false },
  { key: 'unitOfMeasure', label: 'UnitOfMeasure', type: "string", required: false },
  { key: 'unitOfMeasureConversion', label: 'UnitOfMeasureConversion', type: "string", required: false },
  { key: 'planningQuantity', label: 'PlanningQuantity', type: "string", required: false },
  { key: 'useFixedPlanningQuantity', label: 'UseFixedPlanningQuantity', type: "boolean", required: false },
  { key: 'roundToUnitOfMeasure', label: 'RoundToUnitOfMeasure', type: "boolean", required: false },
  { key: 'sentFromBackOffice', label: 'SentFromBackOffice', type: "boolean", required: false },

];

module.exports = {
  key: 'save_appointment',
  noun: 'Appointment',
  display: {
    label: 'Save appointment',
    description: 'Saves an appointment',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: createFields(fields),
    perform: {
      url: createUri(constants.endpoints.appointment.appointment),
      method: 'POST',
      headers,
      body: createBody(fields),
    }
  }
};