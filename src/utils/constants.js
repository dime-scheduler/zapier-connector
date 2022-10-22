const baseUri = 'https://api.dimescheduler.com/';
const version = "v0.1";

const endpoints = {
    task: 'task',
    job: 'job',
    resource: 'resource',
    actionUri: 'actionUri',
    appointment: {
        content: 'appointmentContent',
        locked: 'appointmentLocked',
        category: 'appointmentCategory',
        importance: 'appointmentImportance',
        planningQuantity: 'appointmentPlanningQuantity',
        timeMarker: 'appointmentTimeMarker',
        uri: 'appointmentUri'
    }
}

module.exports = {
    baseUri,
    endpoints,
    version
};