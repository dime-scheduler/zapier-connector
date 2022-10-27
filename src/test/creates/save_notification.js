require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
const createBundle = require('./base_test.js');

describe('Notification', () => {
  zapier.tools.env.inject();

  it('Should upsert a notification', async () => {
    const input = {
      sourceApp: 'ZAPIER',
      sourceType: 'DEMO',
      type: 1,
      code: 'CODE_001',
      text: 'Hi from Zapier test!',
      date: '2022-10-26T15:30:00.00Z'
    };

    const bundle = createBundle(input);
    const result = await appTester(
      App.creates['save_notification'].operation.perform,
      bundle
    );

    result.should.not.be.an.Array();
  });
});
