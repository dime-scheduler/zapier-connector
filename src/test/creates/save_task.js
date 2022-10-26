require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
const createBundle = require('./base_test.js');

describe('Task', () => {
  zapier.tools.env.inject();

  it('Should upsert a task', async () => {
    const input = {};

    const bundle = createBundle(input);
    const result = await appTester(
      App.creates['save_task'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
