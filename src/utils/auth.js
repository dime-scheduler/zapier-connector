module.exports = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'OCP-APIM-SUBSCRIPTION-KEY': '{{bundle.authData.Ocp-Apim-Subscription-Key}}',
    'DS-URI': '{{bundle.authData.ds-uri}}',
    'DS-USER': '{{bundle.authData.ds-user}}',
    'DS-PASSWORD': '{{bundle.authData.ds-password}}',
    'ds-append': true
};