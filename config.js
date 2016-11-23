exports.config = {

    framework: 'jasmine2',
    onPrepare: function () {

        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            filePrefix: 'testResult',
            savePath: 'outputdir'
        }));

    },


    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000,
        print: function() {}
    },

    directConnect: true,

    capabilities: {
        browserName : 'firefox',
        version: ''

    },

    //
    // seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['project_test.js']


};

