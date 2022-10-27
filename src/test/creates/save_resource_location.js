require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
const createBundle = require('./base_test.js');

describe('Resource Location', () => {
  zapier.tools.env.inject();

  it('Should upsert a resource location', async () => {
    const input = {
      resourceno: 'Zapier test',
      latitude: "0",
      longitude: "0"
    };

    const bundle = createBundle(input);
    const result = await appTester(
      App.creates['save_resource_location'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
