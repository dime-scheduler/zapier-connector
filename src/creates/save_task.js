const { createAction } = require('../utils/actionBuilder.js');
const constants = require('../utils/constants.js');

const fields = [
  { key: 'sourceApp', label: '"sourceApp', type: "string", required: true },
  { key: 'sourceType', label: 'SourceType', type: "string", required: true },
  { key: 'jobNo', label: 'JobNo', type: "string", required: true },
  { key: 'taskNo', label: 'TaskNo', type: "string", required: true },
  { key: 'taskType', label: 'TaskType', type: "string" },
  { key: 'shortDescription', label: 'ShortDescription', type: "string", required: true },
  { key: 'description', label: 'Description', type: "string" },
  { key: 'name', label: 'Name', type: "string" },
  { key: 'type', label: 'Type', type: "string" },
  { key: 'category', label: 'Category', type: "string" },
  { key: 'timeMarker', label: 'TimeMarker', type: "string" },
  { key: 'pin', label: 'Pin', type: "string" },
  { key: 'serviceNo', label: 'ServiceNo', type: "string" },
  { key: 'serviceGroup', label: 'ServiceGroup', type: "string" },
  { key: 'serviceClass', label: 'ServiceClass', type: "string" },
  { key: 'serviceSerialNo', label: 'ServiceSerialNo', type: "string" },
  { key: 'serviceName', label: 'ServiceName', type: "string" },
  { key: 'irisFault', label: 'IrisFault', type: "string" },
  { key: 'irisSymptom', label: 'IrisSymptom', type: "string" },
  { key: 'irisArea', label: 'IrisArea', type: "string" },
  { key: 'irisReason', label: 'IrisReason', type: "string" },
  { key: 'irisResolution', label: 'IrisResolution', type: "string" },
  { key: 'skill1', label: 'Skill1', type: "string" },
  { key: 'skill2', label: 'Skill2', type: "string" },
  { key: 'skill3', label: 'Skill3', type: "string" },
  { key: 'contractNo', label: 'ContractNo', type: "string" },
  { key: 'contractType', label: 'ContractType', type: "string" },
  { key: 'contractDescription', label: 'ContractDescription', type: "string" },
  { key: 'contractStartDate', label: 'ContractStartDate', type: "string" },
  { key: 'contractEndDate', label: 'ContractEndDate', type: "string" },
  { key: 'partsWarrantyStartDate', label: 'PartsWarrantyStartDate', type: "string" },
  { key: 'partsWarrantyEndDate', label: 'PartsWarrantyEndDate', type: "string" },
  { key: 'laborWarrantyStartDate', label: 'LaborWarrantyStartDate', type: "string" },
  { key: 'laborWarrantyEndDate', label: 'LaborWarrantyEndDate', type: "string" },
  { key: 'importance', label: 'Importance', type: "string" },
  { key: 'status', label: 'Status', type: "string" },
  { key: 'expectedResponseDateTime', label: 'ExpectedResponseDateTime', type: "string" },
  { key: 'actualResponseDateTime', label: 'ActualResponseDateTime', type: "string" },
  { key: 'requestedStartDate', label: 'RequestedStartDate', type: "string" },
  { key: 'requestedEndDate', label: 'RequestedEndDate', type: "string" },
  { key: 'requestedStartTime', label: 'RequestedStartTime', type: "string" },
  { key: 'requestedEndTime', label: 'RequestedEndTime', type: "string" },
  { key: 'confirmedStartDate', label: 'ConfirmedStartDate', type: "string" },
  { key: 'confirmedEndDate', label: 'ConfirmedEndDate', type: "string" },
  { key: 'actualStartDate', label: 'ActualStartDate', type: "string" },
  { key: 'actualEndDate', label: 'ActualEndDate', type: "string" },
  { key: 'locationDescription', label: 'LocationDescription', type: "string" },
  { key: 'duration', label: 'Duration', type: "string" },
  { key: 'durationInSeconds', label: 'DurationInSeconds', type: "string" },
  { key: 'subject', label: 'Subject', type: "string" },
  { key: 'body', label: 'Body', type: "string" },
  { key: 'infiniteTask', label: 'InfiniteTask', type: "string" },
  { key: 'taskOpenAsOf', label: 'TaskOpenAsOf', type: "string" },
  { key: 'taskOpenTill', label: 'TaskOpenTill', type: "string" },
  { key: 'requiredTotalDuration', label: 'RequiredTotalDuration', type: "string" },
  { key: 'requiredNoResources', label: 'RequiredNoResources', type: "string" },
  { key: 'appointmentEarliestAllowed', label: 'AppointmentEarliestAllowed', type: "string" },
  { key: 'appointmentLatestAllowed', label: 'AppointmentLatestAllowed', type: "string" },
  { key: 'freeText1', label: 'FreeText1', type: "string" },
  { key: 'freeText2', label: 'FreeText2', type: "string" },
  { key: 'freeText3', label: 'FreeText3', type: "string" },
  { key: 'freeText4', label: 'FreeText4', type: "string" },
  { key: 'freeText5', label: 'FreeText5', type: "string" },
  { key: 'freeText6', label: 'FreeText6', type: "string" },
  { key: 'freeText7', label: 'FreeText7', type: "string" },
  { key: 'freeText8', label: 'FreeText8', type: "string" },
  { key: 'freeText9', label: 'FreeText9', type: "string" },
  { key: 'freeText10', label: 'FreeText10', type: "string" },
  { key: 'freeText11', label: 'FreeText11', type: "string" },
  { key: 'freeText12', label: 'FreeText12', type: "string" },
  { key: 'freeText13', label: 'FreeText13', type: "string" },
  { key: 'freeText14', label: 'FreeText14', type: "string" },
  { key: 'freeText15', label: 'FreeText15', type: "string" },
  { key: 'freeText16', label: 'FreeText16', type: "string" },
  { key: 'freeText17', label: 'FreeText17', type: "string" },
  { key: 'freeText18', label: 'FreeText18', type: "string" },
  { key: 'freeText19', label: 'FreeText19', type: "string" },
  { key: 'freeText20', label: 'FreeText20', type: "string" },
  { key: 'freeDecimal1', label: 'FreeDecimal1', type: "string" },
  { key: 'freeDecimal2', label: 'FreeDecimal2', type: "string" },
  { key: 'freeDecimal3', label: 'FreeDecimal3', type: "string" },
  { key: 'freeDecimal4', label: 'FreeDecimal4', type: "string" },
  { key: 'freeDecimal5', label: 'FreeDecimal5', type: "string" },
  { key: 'freeDate1', label: 'FreeDate1', type: "string" },
  { key: 'freeDate2', label: 'FreeDate2', type: "string" },
  { key: 'freeDate3', label: 'FreeDate3', type: "string" },
  { key: 'freeDate4', label: 'FreeDate4', type: "string" },
  { key: 'freeDate5', label: 'FreeDate5', type: "string" },
  { key: 'freeBit1', label: 'FreeBit1', type: "string" },
  { key: 'freeBit2', label: 'FreeBit2', type: "string" },
  { key: 'freeBit3', label: 'FreeBit3', type: "string" },
  { key: 'freeBit4', label: 'FreeBit4', type: "string" },
  { key: 'freeBit5', label: 'FreeBit5', type: "string" },
  { key: 'url1', label: 'Url1', type: "string" },
  { key: 'urlDescription1', label: 'UrlDescription1', type: "string" },
  { key: 'url2', label: 'Url2', type: "string" },
  { key: 'urlDescription2', label: 'UrlDescription2', type: "string" },
  { key: 'url3', label: 'Url3', type: "string" },
  { key: 'urlDescription3', label: 'UrlDescription3', type: "string" },
  { key: 'certificateNo', label: 'CertificateNo', type: "string" },
  { key: 'requiredTotalDurationInSeconds', label: 'RequiredTotalDurationInSeconds', type: "string" },
  { key: 'doNotCountAppointmentResource', label: 'DoNotCountAppointmentResource', type: "string" },
  { key: 'isComplete', label: 'IsComplete', type: "string" },
  { key: 'planningUom', label: 'PlanningUom', type: "string" },
  { key: 'planningUomconversion', label: 'PlanningUomconversion', type: "string" },
  { key: 'planningQty', label: 'PlanningQty', type: "string" },
  { key: 'useFixPlanningQty', label: 'UseFixPlanningQty', type: "boolean" },
  { key: 'roundToUom', label: 'RoundToUom', type: "string" },
  { key: 'appointmentTemplate', label: 'AppointmentTemplate', type: "string" },
  { key: 'bulkPlanningQty', label: 'BulkPlanningQty', type: "string" },
  { key: 'startDate', label: 'StartDate', type: "string" },
  { key: 'endDate', label: 'EndDate', type: "string" },
  { key: 'percentDone', label: 'PercentDone', type: "string" },
  { key: 'schedulingMode', label: 'SchedulingMode', type: "string" },
  { key: 'baseLineStartDate', label: 'BaseLineStartDate', type: "string" },
  { key: 'baseLineEndDate', label: 'BaseLineEndDate', type: "string" },
  { key: 'baseLinePercentDone', label: 'BaseLinePercentDone', type: "string" },
  { key: 'deadLine', label: 'DeadLine', type: "string" },
  { key: 'index', label: 'Index', type: "string" },
  { key: 'constraintType', label: 'ConstraintType', type: "string" },
  { key: 'constraintDatetime', label: 'ConstraintDatetime', type: "string" },
  { key: 'parentTaskNo', label: 'ParentTaskNo', type: "string" },
  { key: 'calendarCode', label: 'CalendarCode', type: "string" },
  { key: 'predecessorTaskNo', label: 'PredecessorTaskNo', type: "string" },
  { key: 'predecessorLag', label: 'PredecessorLag', type: "string" },
  { key: 'manuallyScheduled', label: 'ManuallyScheduled', type: "string" },
  { key: 'note', label: 'Note', type: "string" },
  { key: 'overRuleGanttPlanning', label: 'OverRuleGanttPlanning', type: "string" },
  { key: 'ignoreCalendars', label: 'IgnoreCalendars', type: "string" },
  { key: 'containerName', label: 'ContainerName', type: "string" },
  { key: 'containerIndex', label: 'ContainerIndex', type: "string" },
  { key: 'checkAppointments', label: 'CheckAppointments', type: "string" },
  { key: 'sentFromBackOffice', label: 'SentFromBackOffice', type: "string" },
];

const sample = {
  sourceApp: 'ZAPIER',
  sourceType: 'DEMO',
  jobNo: 'DS_DEMO',
  taskNo: 'DS_DEMO_TEST',
  useFixPlanningQty: true,
  shortDescription: 'Hi from Zapier test suite',
  description: 'Hi from Zapier test suite'
};

module.exports = createAction(
  constants.endpoints.task.task,
  'save_task',
  'Task',
  'Save task',
  'Saves a task',
  fields,
  sample
);