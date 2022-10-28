require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
const createBundle = require('./base_test.js');

describe('Task Lock', () => {
  zapier.tools.env.inject();

  it('Should update the task lock', async () => {
    const input = {
      sourceApp: 'ZAPIER',
      sourceType: 'DEMO',
      jobNo: 'DS_DEMO',
      taskNo: 'DS_DEMO_TEST',
      locked: true
    };

    const bundle = createBundle(input);
    const result = await appTester(
      App.creates['save_task_locked'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
