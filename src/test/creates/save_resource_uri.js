require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
const createBundle = require('./base_test.js');

describe('Resource URI', () => {
  zapier.tools.env.inject();

  it('Should upsert a resource URI', async () => {
    const input = {
      resourceNo: 'Zapier test',
      uri: 'https://www.dimescheduler.com',
      description: 'Dime.Scheduler'
    };

    const bundle = createBundle(input);
    const result = await appTester(
      App.creates['save_resource_uri'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
