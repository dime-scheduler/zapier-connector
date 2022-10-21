module.exports = {
  key: 'save_job',
  noun: 'Job',
  display: {
    label: 'Save job',
    description: 'Saves a ',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: [
      {
        key: 'sourceApp',
        label: 'Source App',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'sourceType',
        label: 'Source Type',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'jobNo',
        label: 'Job Number',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
    ],
    perform: {
      body: {
        sourceApp: '{{bundle.inputData.sourceApp}}',
        sourceType: '{{bundle.inputData.sourceType}}',
        jobNo: '{{bundle.inputData.jobNo}}'
      },
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
      url: 'https://api.dimescheduler.com/v0.1/job',
    },
  },
};
