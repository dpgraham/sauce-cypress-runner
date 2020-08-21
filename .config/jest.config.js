const path = require('path')

const { HOME_DIR } = require('../src/constants')

module.exports = {
    rootDir: HOME_DIR,
    testEnvironment: 'node',
    setupFilesAfterEnv: [
        `${HOME_DIR}/src/jest.setup.js`,
        `${HOME_DIR}/src/jest.teardown.js`
    ],
    reporters: [
        `default`,
        `${HOME_DIR}/src/reporter.js`
    ],
    testMatch: [
        `${HOME_DIR}/tests/?(*.)+(spec|test).[jt]s?(x)`,
        `${HOME_DIR}/tests/**/?(*.)+(spec|test).[jt]s?(x)`
    ]
};