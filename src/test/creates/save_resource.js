require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
const createBundle = require('./base_test.js');

describe('Resource', () => {
  zapier.tools.env.inject();

  it('Should upsert a resource', async () => {
    const input = {
      sourceApp: 'ZAPIER',
      sourceType: 'DEMO',
      resourceNo: 'Zapier test',
      resourceName: 'Zapier test',
      displayName: 'Zapier test',
      resourceGpsTrackingEnabled: true
    };

    const bundle = createBundle(input);
    const result = await appTester(
      App.creates['save_resource'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
