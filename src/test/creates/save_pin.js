require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
const createBundle = require('./base_test.js');

describe('Pin', () => {
  zapier.tools.env.inject();

  it('Should upsert a pin', async () => {
    const input = {};

    const bundle = createBundle(input);
    const result = await appTester(
      App.creates['save_pin'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
