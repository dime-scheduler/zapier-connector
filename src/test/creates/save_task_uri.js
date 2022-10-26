require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
const createBundle = require('./base_test.js');

describe('Task URI', () => {
  zapier.tools.env.inject();

  it('Should update the task URI', async () => {
    const input = {};

    const bundle = createBundle(input);
    const result = await appTester(
      App.creates['save_task_uri'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
