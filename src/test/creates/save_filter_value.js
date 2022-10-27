require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
const createBundle = require('./base_test.js');

describe('Filter Value', () => {
  zapier.tools.env.inject();

  it('Should upsert a filter value', async () => {
    const input = {
      sourceApp: 'ZAPIER',
      sourceType: 'DEMO',
      jobNo: 'DS_DEMO',
      taskNo: 'DS_DEMO_TEST',
      group: 'Zapier test',
      value: 'Zapier test',
    };

    const bundle = createBundle(input);
    const result = await appTester(
      App.creates['save_filter_value'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
