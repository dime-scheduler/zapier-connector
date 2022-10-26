require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
const createBundle = require('./base_test.js');

describe('Appointment', () => {
  zapier.tools.env.inject();

  it('Should upsert an appointment', async () => {
    const input = {
      sourceApp: 'ZAPIER',
      sourceType: 'DEMO',
      jobNo: 'DS_DEMO',
      taskNo: 'DS_DEMO_15MIN',
      subject: 'Hello world',
      resourceNo: 'OPTIMIZE_001',
      start: '2022-10-27T10:00:00Z',
      end: '2022-10-27T12:00:00Z'
    };

    const bundle = createBundle(input);
    const result = await appTester(
      App.creates['save_appointment'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
