require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
const createBundle = require('./base_test.js');

describe('Resource Filter Value', () => {
  zapier.tools.env.inject();

  it('Should upsert a resource filter value', async () => {
    const input = {
      sourceApp: 'ZAPIER',
      sourceType: 'DEMO',
      resourceNo: 'Zapier test',
      filterGroup: 'Zapier test',
      filterValue: 'Zapier test'
    };

    const bundle = createBundle(input);
    const result = await appTester(
      App.creates['save_resource_filter_value'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
