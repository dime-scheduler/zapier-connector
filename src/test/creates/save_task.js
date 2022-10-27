require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
const createBundle = require('./base_test.js');

describe('Task', () => {
  zapier.tools.env.inject();

  it('Should upsert a task', async () => {
    const input = {
      sourceApp: 'ZAPIER',
      sourceType: 'DEMO',
      jobNo: 'DS_DEMO',
      taskNo: 'DS_DEMO_TEST',
      useFixPlanningQty: true,
      shortDescription: 'Hi from Zapier test suite',
      description: 'Hi from Zapier test suite'
    };

    const bundle = createBundle(input);
    const result = await appTester(
      App.creates['save_task'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
