module.exports = {
  key: 'save_appointment_category',
  noun: 'Appointment Category',
  display: {
    label: 'Set category of appointment',
    description: 'Sets the category of the appointment ',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: [],
    perform: {
      body: {},
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'OCP-APIM-SUBSCRIPTION-KEY':
          '{{bundle.authData.Ocp-Apim-Subscription-Key}}',
        'DS-URI': '{{bundle.authData.ds-uri}}',
        'DS-USER': '{{bundle.authData.ds-user}}',
        'DS-PASSWORD': '{{bundle.authData.ds-password}}',
      },
      method: 'POST',
      params: {
        'Ocp-Apim-Subscription-Key':
          '{{bundle.authData.Ocp-Apim-Subscription-Key}}',
        'ds-uri': '{{bundle.authData.ds-uri}}',
        'ds-user': '{{bundle.authData.ds-user}}',
        'ds-password': '{{bundle.authData.ds-password}}',
      },
      url: 'https://api.dimescheduler.com/v0.1/appointmentCategory',
    },
  },
};
