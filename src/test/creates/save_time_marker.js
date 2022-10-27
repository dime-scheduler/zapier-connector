require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
const createBundle = require('./base_test.js');

describe('Time Marker', () => {
  zapier.tools.env.inject();

  it('Should upsert a time marker', async () => {
    const input = {
      name: 'Zapier test',
      color: '#111111'
    };

    const bundle = createBundle(input);
    const result = await appTester(
      App.creates['save_time_marker'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
