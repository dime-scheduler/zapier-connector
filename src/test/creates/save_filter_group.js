require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
const createBundle = require('./base_test.js');

describe('Filter Group', () => {
  zapier.tools.env.inject();

  it('Should upsert a filter group', async () => {
    const input = {
      sourceApp: 'ZAPIER',
      sourceType: 'DEMO',
      jobNo: 'DS_DEMO',
      taskNo: 'DS_DEMO_TEST',
      name: 'Zapier test'
    };

    const bundle = createBundle(input);
    const result = await appTester(
      App.creates['save_filter_group'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
