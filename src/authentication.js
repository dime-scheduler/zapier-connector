module.exports = {
  type: 'custom',
  test: {
    body: {
      name: 'Hello',
      displayName: 'Hello',
      color: '#123123',
      'ds-uri': '{{bundle.authData.ds-uri}}',
      'ds-user': '{{bundle.authData.ds-user}}',
      'ds-password': '{{bundle.authData.ds-password}}',
    },
    headers: {
      'OCP-APIM-SUBSCRIPTION-KEY':
        '{{bundle.authData.Ocp-Apim-Subscription-Key}}',
      'DS-URI': '{{bundle.authData.ds-uri}}',
      'DS-USER': '{{bundle.authData.ds-user}}',
      'DS-PASSWORD': '{{bundle.authData.ds-password}}',
    },
    method: 'POST',
    url: 'https://api.dimescheduler.com/v0.1/category',
    params: {
      'Ocp-Apim-Subscription-Key':
        '{{bundle.authData.Ocp-Apim-Subscription-Key}}',
      'ds-uri': '{{bundle.authData.ds-uri}}',
      'ds-user': '{{bundle.authData.ds-user}}',
      'ds-password': '{{bundle.authData.ds-password}}',
    },
  },
  fields: [
    { computed: false, key: 'Ocp-Apim-Subscription-Key', label: 'API key', required: true },
    { computed: false, key: 'ds-uri', required: true, label: 'URI' },
    { computed: false, key: 'ds-user', required: true, label: 'User' },
    { computed: false, key: 'ds-password', label: 'Password' },
  ],
  customConfig: {},
};
