require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
const createBundle = require('./base_test.js');

describe('Resource Calendar', () => {
  zapier.tools.env.inject();

  it('Should upsert a resource calendar', async () => {
    const input = {};

    const bundle = createBundle(input);
    const result = await appTester(
      App.creates['save_resource_calendar'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
