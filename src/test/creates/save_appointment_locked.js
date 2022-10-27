require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
const createBundle = require('./base_test.js');

describe('Appointment Locked', () => {
  zapier.tools.env.inject();

  it('Should set appointment lock', async () => {
    const input = {
      sourceApp: 'ZAPIER',
      sourceType: 'DEMO',
      locked: true,
      appointmentGuid: 'b0846a9e-ae8d-4d02-9f7a-49e50b9f3fc0'
    };

    const bundle = createBundle(input);
    const result = await appTester(
      App.creates['save_appointment_locked'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
