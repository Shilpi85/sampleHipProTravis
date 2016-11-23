
exports.config = {
    onPrepare: function () {
        require('jasmine-reporters');
        jasmine.getEnv().addReporter(
            new jasmine.JUnitXmlReporter('outputdir', true, true)
        );
    },

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000,
        print: function() {}
    },

    capabilities: {
        'browserName' : 'firefox',
        shardTestFiles: true,
        maxInstances: 1

    },

    //seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['project_test.js']


};

