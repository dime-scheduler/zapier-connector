const baseUri = 'https://api.dimescheduler.com/';
const version = "v0.1";

const endpoints = {
    job: 'job',
    actionUri: 'actionUri',
    caption: 'caption',
    category: 'category',
    container: 'container',
    timeMarker: 'timeMarker',
    filterGroup: 'filterGroup',
    filterValue: 'filterValue',
    notification: 'notification',
    appointment: {
        appointment: 'appointment',
        assignment: 'assignment',
        content: 'appointmentContent',
        locked: 'appointmentLocked',
        category: 'appointmentCategory',
        importance: 'appointmentImportance',
        planningQuantity: 'appointmentPlanningQuantity',
        timeMarker: 'appointmentTimeMarker',
        uri: 'appointmentUri'
    },
    resource: {
        resource: 'resource',
        calendar: 'resourceCalendar',
        capacity: 'resourceCapacity',
        filterValue: 'resourceFilterValue',
        location: 'resourceGpsTracking',
        uri: 'resourceUri'
    },
    task: {
        task: 'task',
        container: 'taskContainer',
        filterValue: 'taskFilterValue',
        locked: 'taskLocked',
        uri: 'taskUri'
    }
}

module.exports = {
    baseUri,
    endpoints,
    version
};