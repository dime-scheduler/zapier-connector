require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
const createBundle = require('./base_test.js');

describe('Task URI', () => {
  zapier.tools.env.inject();

  it('Should update the task URI', async () => {
    const input = {
      sourceApp: 'ZAPIER',
      sourceType: 'DEMO',
      jobNo: 'DS_DEMO',
      taskNo: 'DS_DEMO_TEST',
      uri: 'http://www.dimescheduler.com',
      description: 'Dime.Scheduler'
    };

    const bundle = createBundle(input);
    const result = await appTester(
      App.creates['save_task_uri'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
