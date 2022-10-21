module.exports = {
  key: 'create_category',
  noun: 'Category',
  display: {
    label: 'Create category',
    description: 'Creates a category',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: [
      {
        key: 'name',
        label: 'Name',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'displayName',
        label: 'Display Name',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'color',
        label: 'Color',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
    ],
    perform: {
      body: {
        name: '{{bundle.inputData.name}}',
        displayName: '{{bundle.inputData.displayName}}',
        color: '{{bundle.inputData.color}}',
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
      url: 'https://api.dimescheduler.com/v0.1/category',
    },
  },
};
