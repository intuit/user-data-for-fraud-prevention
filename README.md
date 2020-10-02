# user-data-for-fraud-prevention

![user-data-for-fraud-prevention logo](./user-data-for-fraud-prevention-logo.png)

[![CircleCI](https://circleci.com/gh/intuit/user-data-for-fraud-prevention/tree/master.svg?style=shield)](https://circleci.com/gh/intuit/user-data-for-fraud-prevention/tree/master)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/v/user-data-for-fraud-prevention.svg)](http://npm.im/user-data-for-fraud-prevention)

## Description

This is an npm library to detect some browser or device details of the user such as Timezone, screen sizes, browser configuration etc.
Such details are often required to be sent by software providers to the tax authority in their country to prevent fraud.

Eg: Tax Authority in UK (HMRC) requires software providers using some of their APIs to provide consistent headers known as Fraud Prevention headers. This node module collects such information for you in the format required.

Each top level folder in `src/js` has its own README with more specific information around the use case. E.g. [HMRC README](src/js/hmrc/README.md)

## How to use
Usage instructions can be found [here](./USAGE.md)

## Demo
Here are the steps to test:

You can find a demo project [here](https://github.com/reubenae/user-data-demo)


* `Git clone` the project
* Run `yarn`
* Run `yarn start`
* Run `yarn demo`
* Run `yarn link "user-data-for-fraud-prevention"`

Now you can make changes in `user-data-for-fraud-prevention` locally and they will instantly reflect in the demo project.

You can check the browser console for errors.

## Contributing

We do not allow contributors to claim issues. If you find something interesting you can contribute to the repo, feel free to raise a PR. We do not require you to let us know in advance. 

1. Fork the repo
1. Install dependencies locally `yarn` or `npm install`
1. Make your changes.
1. Make sure it builds `yarn build` or `npm run build`
1. Run the tests (you added tests, right?) with `npm test` or `yarn tests`
1. Test your changes in your consuming code or using our demo project: [`yarn link`](https://classic.yarnpkg.com/en/docs/cli/link) or [`npm link`](https://docs.npmjs.com/cli/link)
1. Ensure the code coverage is the same or higher than before your changes.
1. Create a PR to the `master` branch

## License

[License](LICENSE)

## Changelog

Please see our [CHANGELOG](CHANGELOG.md)
