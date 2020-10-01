# user-data-for-fraud-prevention

![user-data-for-fraud-prevention logo](./user-data-for-fraud-prevention-logo.png)

[![CircleCI](https://circleci.com/gh/intuit/user-data-for-fraud-prevention/tree/master.svg?style=shield)](https://circleci.com/gh/intuit/user-data-for-fraud-prevention/tree/master)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Description

This is an npm library to detect some browser or device details of the user such as Timezone, screen sizes, browser configuration etc.
Such details are often required to be sent by software providers to the tax authority in their country to prevent fraud.

Eg: Tax Authority in UK (HMRC) requires software providers using some of their APIs to provide consistent headers known as Fraud Prevention headers. This node module collects such information for you in the format required.

Each top level folder in `src/js` has its own README with more specific information around the use case. E.g. [HMRC README](src/js/hmrc/README.md)

## How to use

In your project root run:

```sh
yarn add user-data-for-fraud-prevention
```

Then to use in code:

```js
import getFraudPreventionHeaders from 'user-data-for-fraud-prevention';
// or
import {getFraudPreventionHeaders, fraudPreventionHeadersEnum} from 'user-data-for-fraud-prevention';
```

To use

```js
const fraudHeaders = await getFraudPreventionHeaders();
// If you need individual headers
const timezoneHeader = fraudHeaders.get('Gov-Client-Timezone');
// Or
const timezoneHeader = fraudHeaders.get(fraudPreventionHeadersEnum.TIMEZONE);
```

## Demo
You can find a demo of the project [here](https://github.com/reubenae/user-data-demo)

## Contributing

We do not allow contributors to claim issues. If you find something interesting you can contribute to the repo, feel free to raise a PR. We do not require you to let us know in advance. 

1. Fork the repo
1. Install dependencies locally `yarn` or `npm install`
1. Make your changes.
1. Make sure it builds `yarn build` or `npm build`
1. Run the tests (you added tests, right?) with `npm test` or `yarn tests`
1. Test your changes in your consuming code: `yarn link` [Yarn link documentation](https://classic.yarnpkg.com/en/docs/cli/link) or `npm link` [npm link documentation](https://docs.npmjs.com/cli/link)
1. Ensure the code coverage is the same or higher than before your changes.
1. Create a PR to the `master` branch

## License

[License](LICENSE)

## Changelog

Please see our [CHANGELOG](CHANGELOG.md)
