let chai = require('chai');
exports.config = {

    // test script
    specs: [
        "src/test_script/login_tc001.js",
        // "src/test_script/login_tc002.js",
        // "src/test_script/login_tc003.js",
        // "src/test_script/login_tc004.js",
        // "src/test_script/login_tc005.js",
    ],
    maxInstances: 2,
    // error: missing capaciti
    capabilities: [
        {
            browserName: "chrome"
        }
    ],
    runner: 'local',

    //declare local in4
    hostname: 'localhost',
    port: 9515,
    path: '//',
    baseUrl: "http://uat.evn-solar.com/#",
    //framework
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },
    reporters: [
        ['junit', {
            outputDir: './reporter'
        }],
        ['allure', {
            outputDir: './allure-results/1',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }]
    ],
    before: () => {
        global.expect = chai.expect;
    },
    // afterStep: function (test, context, { error, result, duration, passed, retries }) {
    //     if (error) {
    //       browser.takeScreenshot();
    //     }
    //   }
}