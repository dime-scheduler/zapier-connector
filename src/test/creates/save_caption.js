require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
const createBundle = require('./base_test.js');

describe('Caption', () => {
  zapier.tools.env.inject();

  it('Should upsert a caption', async () => {
    const input = {
      context: 1,
      sourceTable: 'JOB',
      fieldName: 'SourceApp',
      language: 'nl',
      text: 'Hello world'
    };

    const bundle = createBundle(input);
    const result = await appTester(
      App.creates['save_caption'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
