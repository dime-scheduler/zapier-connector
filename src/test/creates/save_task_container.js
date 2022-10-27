require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
const createBundle = require('./base_test.js');

describe('Task Container', () => {
    zapier.tools.env.inject();

    it('Should update the task container', async () => {
        const input = {
            sourceApp: 'ZAPIER',
            sourceType: 'DEMO',
            jobNo: 'DS_DEMO',
            taskNo: 'DS_DEMO_TEST',
            name: 'Zapier test',
        };

        const bundle = createBundle(input);
        const result = await appTester(
            App.creates['save_task_container'].operation.perform,
            bundle
        );
        result.should.not.be.an.Array();
    });
});
