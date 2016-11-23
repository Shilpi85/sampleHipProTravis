
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

    directConnect: true,

    capabilities: {
        browserName : 'firefox'
    },

    //seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['project_test.js']


};

