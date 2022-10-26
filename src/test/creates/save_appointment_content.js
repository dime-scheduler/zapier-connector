require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
const createBundle = require('./base_test.js');

describe('Appointment Content', () => {
  zapier.tools.env.inject();

  it('Should set appointment content', async () => {
    const input = {
      name: 'Zapier test',
      displayName: 'Zapier test',
      color: '#111111'
    };

    const bundle = createBundle(input);
    const result = await appTester(
      App.creates['save_appointment_content'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
