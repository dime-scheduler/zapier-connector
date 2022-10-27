require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
const createBundle = require('./base_test.js');

describe('Action URI', () => {
  zapier.tools.env.inject();

  it('Should upsert an action URI', async () => {
    const input = {
      sourceApp: 'ZAPIER',
      sourceType: 'DEMO',
      uriType: '1',
      uri: 'https://www.dimescheduler.com',
      description: 'Dime.Scheduler web',
      default: false
    };

    const bundle = createBundle(input);
    const result = await appTester(
      App.creates['save_action_uri'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
