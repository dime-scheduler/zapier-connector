require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
const createBundle = require('./base_test.js');

describe('Resource Capacity', () => {
  zapier.tools.env.inject();

  it('Should upsert a resource capacity', async () => {
    const input = {
      resourceNo: 'Zapier test',
      date: '2022-10-17',
      capacityInSeconds: 500,
      quantity: 50,
    };

    const bundle = createBundle(input);
    const result = await appTester(
      App.creates['save_resource_capacity'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
