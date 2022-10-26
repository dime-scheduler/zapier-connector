require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
const createBundle = require('./base_test.js');

describe('Assignment', () => {
  zapier.tools.env.inject();

  it('Should upsert an assignment', async () => {
    const input = {};

    const bundle = createBundle(input);
    const result = await appTester(
      App.creates['save_assignment'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
