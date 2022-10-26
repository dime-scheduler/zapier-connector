const authentication = require('./authentication');
const createCategoryCreate = require('./creates/save_category.js');
const save_action_urlCreate = require('./creates/save_action_url.js');
const save_appointment_categoryCreate = require('./creates/save_appointment_category.js');
const save_appointment_contentCreate = require('./creates/save_appointment_content.js');
const save_appointment_importanceCreate = require('./creates/save_appointment_importance.js');
const save_appointment_lockedCreate = require('./creates/save_appointment_locked.js');
const save_appointment_planning_quantityCreate = require('./creates/save_appointment_planning_quantity.js');
const save_appointment_time_markerCreate = require('./creates/save_appointment_time_marker.js');
const save_appointment_uriCreate = require('./creates/save_appointment_uri.js');
const save_appointmentCreate = require('./creates/save_appointment.js');
const save_assignmentCreate = require('./creates/save_assignment.js');
const save_captionCreate = require('./creates/save_caption.js');
const save_containerCreate = require('./creates/save_container.js');
const save_filter_groupCreate = require('./creates/save_filter_group.js');
const save_filter_valueCreate = require('./creates/save_filter_value.js');
const save_jobCreate = require('./creates/save_job.js');
const save_notificationCreate = require('./creates/save_notification.js');
const save_pinCreate = require('./creates/save_pin.js');
const save_resourceCreate = require('./creates/save_resource.js');
const save_resource_calendarCreate = require('./creates/save_resource_calendar.js');
const save_resource_capacityCreate = require('./creates/save_resource_capacity.js');
const save_resource_filter_valueCreate = require('./creates/save_resource_filter_value.js');
const save_resource_locationCreate = require('./creates/save_resource_location.js');
const save_resource_uriCreate = require('./creates/save_resource_uri.js');
const save_taskCreate = require('./creates/save_task.js');
const save_task_containerCreate = require('./creates/save_task_container.js');
const save_task_filter_valueCreate = require('./creates/save_task_filter_value.js');
const save_task_lockedCreate = require('./creates/save_task_locked.js');
const save_task_uriCreate = require('./creates/save_task_uri.js');
const save_time_markerCreate = require('./creates/save_time_marker.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  creates: {
    [createCategoryCreate.key]: createCategoryCreate,
    [save_action_urlCreate.key]: save_action_urlCreate,
    [save_appointmentCreate.key]: save_appointmentCreate,
    [save_appointment_categoryCreate.key]: save_appointment_categoryCreate,
    [save_appointment_contentCreate.key]: save_appointment_contentCreate,
    [save_appointment_importanceCreate.key]: save_appointment_importanceCreate,
    [save_appointment_lockedCreate.key]: save_appointment_lockedCreate,
    [save_appointment_planning_quantityCreate.key]: save_appointment_planning_quantityCreate,
    [save_appointment_time_markerCreate.key]: save_appointment_time_markerCreate,
    [save_appointment_uriCreate.key]: save_appointment_uriCreate,
    [save_assignmentCreate.key]: save_assignmentCreate,
    [save_captionCreate.key]: save_captionCreate,
    [save_containerCreate.key]: save_containerCreate,
    [save_filter_groupCreate.key]: save_filter_groupCreate,
    [save_filter_valueCreate.key]: save_filter_valueCreate,
    [save_jobCreate.key]: save_jobCreate,
    [save_notificationCreate.key]: save_notificationCreate,
    [save_pinCreate.key]: save_pinCreate,
    [save_resourceCreate.key]: save_resourceCreate,
    [save_resource_calendarCreate.key]: save_resource_calendarCreate,
    [save_resource_capacityCreate.key]: save_resource_capacityCreate,
    [save_resource_filter_valueCreate.key]: save_resource_filter_valueCreate,
    [save_resource_locationCreate.key]: save_resource_locationCreate,
    [save_resource_uriCreate.key]: save_resource_uriCreate,
    [save_taskCreate.key]: save_taskCreate,
    [save_task_containerCreate.key]: save_task_containerCreate,
    [save_task_filter_valueCreate.key]: save_task_filter_valueCreate,
    [save_task_lockedCreate.key]: save_task_lockedCreate,
    [save_task_uriCreate.key]: save_task_uriCreate,
    [save_time_markerCreate.key]: save_time_markerCreate
  },
};
