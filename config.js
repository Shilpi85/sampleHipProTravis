

exports.config = {

    capabilities: {
        'browserName' : 'firefox',
        shardTestFiles: true,
        maxInstances: 1

    },

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['project_test.js']


};

