# user-data-for-fraud-prevention

![user-data-for-fraud-prevention logo](./user-data-for-fraud-prevention-logo.png)

[![CircleCI](https://circleci.com/gh/intuit/user-data-for-fraud-prevention/tree/master.svg?style=shield)](https://circleci.com/gh/intuit/user-data-for-fraud-prevention/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/intuit/user-data-for-fraud-prevention/badge.svg?branch=master)](https://coveralls.io/github/intuit/user-data-for-fraud-prevention?branch=master)
![NPM Version](https://img.shields.io/npm/v/user-data-for-fraud-prevention)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-21-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Description

This is an npm library to detect some browser or device details of the user such as Timezone, screen sizes, browser configuration etc.
Such details are often required to be sent by software providers to the tax authority in their country to prevent fraud.

Eg: The Tax Authority in the UK (HMRC) requires software providers using some of their APIs to provide consistent headers known as Fraud Prevention headers. This node module collects such information for you in the format required.

Each top level folder in `src/js` has its own README with more specific information around the use case. E.g. [HMRC README](src/js/hmrc/README.md)

## How to use
Usage instructions can be found [here](./USAGE.md)

## How to test
Instructions for testing the changes can be found [here](./DEMO.md)

## Contributing

We do not allow contributors to claim issues. If you find something interesting you can contribute to the repo, feel free to raise a PR. We do not require you to let us know in advance.

1. Fork the repo
1. Install dependencies locally by running `yarn` or `npm install`
1. Make your changes
1. Make sure it builds using `yarn build` or `npm run build`
1. Run the tests (you added tests, right?) with `npm test` or `yarn test`
1. Test your changes in your consuming code or using our demo project: Run [`yarn link`](https://classic.yarnpkg.com/en/docs/cli/link) or [`npm link`](https://docs.npmjs.com/cli/link)
1. Ensure the code coverage is the same or higher than before your changes
1. Ensure commit message is properly formatted: `type(subject): input`. Eg: `chore(prettier): update prettier to 2.x`
1. Create a PR to the `master` branch
1. Codeowners will automatically be requested to review, so no need to tag on your PR

## Expected Project Structure

The structure shown here is how your code should be organised in the repository

implementation folder should be renamed according to the problem you are solving for eg. the code for HMRC in UK is in the folder named hmrc.

```
Project
└──src
     └──js
        └──common                // Common and non specific code shoud be put in this folder
        └──implementation       // Implementation specific code for solving problem should be in this folder
```

## How contributors get added to the README

There are two ways to add yourself as a contributor to this repo:

1. Call @all-contributors bot by adding this following comment in a PR: **@all-contributors please add [username] for [contributions]**. Please refer to the [docs](https://allcontributors.org/docs/en/bot/usage) for more info.
1. Use the all-contributors-cli by running `npx all-contributors add [username] [contributions]`. Please refer to the [docs](https://allcontributors.org/docs/en/cli/usage) for more info.

All parameters are required.
See the [Emoji Key (Contribution Types Reference)](https://allcontributors.org/docs/en/emoji-key) for a list of valid contribution types.

## License

[License](LICENSE)

## Changelog

Please see our [CHANGELOG](CHANGELOG.md)

## Other Languages
README in other languages:

1. [Simplified Chinese](README_SIMPLIFIED_CHINESE.md)
1. [Traditional Chinese](README_TRADITIONAL_CHINESE.md)
2. [Spanish](README_SPANISH.md)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://rachelquan.xyz/"><img src="https://avatars1.githubusercontent.com/u/39972689?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rachel Quan</b></sub></a><br /><a href="#tool-rachelquan" title="Tools">🔧</a> <a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=rachelquan" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/reubenae"><img src="https://avatars1.githubusercontent.com/u/17691502?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Reuben</b></sub></a><br /><a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=reubenae" title="Documentation">📖</a> <a href="https://github.com/intuit/user-data-for-fraud-prevention/pulls?q=is%3Apr+reviewed-by%3Areubenae" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=reubenae" title="Tests">⚠️</a> <a href="#question-reubenae" title="Answering Questions">💬</a> <a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=reubenae" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/skodamarthi"><img src="https://avatars0.githubusercontent.com/u/4538858?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Susmitha Kodamarthi</b></sub></a><br /><a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=skodamarthi" title="Documentation">📖</a> <a href="https://github.com/intuit/user-data-for-fraud-prevention/pulls?q=is%3Apr+reviewed-by%3Askodamarthi" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=skodamarthi" title="Tests">⚠️</a> <a href="#question-skodamarthi" title="Answering Questions">💬</a> <a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=skodamarthi" title="Code">💻</a></td>
    <td align="center"><a href="https://www.youtube.com/user/coolbuddymax"><img src="https://avatars2.githubusercontent.com/u/29047276?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mayank Khanna</b></sub></a><br /><a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=khanna98" title="Code">💻</a></td>
    <td align="center"><a href="https://jitinmaher.me"><img src="https://avatars3.githubusercontent.com/u/7746087?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jitin Maherchandani</b></sub></a><br /><a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=jitinmaher" title="Code">💻</a></td>
    <td align="center"><a href="https://benknoble.github.io/"><img src="https://avatars3.githubusercontent.com/u/22802209?v=4?s=100" width="100px;" alt=""/><br /><sub><b>D. Ben Knoble</b></sub></a><br /><a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=benknoble" title="Code">💻</a></td>
    <td align="center"><a href="https://linktr.ee/misrayashasvi"><img src="https://avatars.githubusercontent.com/u/54177363?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yashasvi Misra</b></sub></a><br /><a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=yashasvimisra2798" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://www.linkedin.com/in/vijaya-lakshmi-venkatraman"><img src="https://avatars.githubusercontent.com/u/34595292?v=4?s=100" width="100px;" alt=""/><br /><sub><b>vvijayalakshmi21</b></sub></a><br /><a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=vvijayalakshmi21" title="Documentation">📖</a> <a href="#maintenance-vvijayalakshmi21" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://tylerkrupicka.com/"><img src="https://avatars.githubusercontent.com/u/5761061?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tyler Krupicka</b></sub></a><br /><a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=tylerkrupicka" title="Code">💻</a> <a href="#plugin-tylerkrupicka" title="Plugin/utility libraries">🔌</a></td>
    <td align="center"><a href="https://github.com/burzynnn"><img src="https://avatars.githubusercontent.com/u/33811303?v=4?s=100" width="100px;" alt=""/><br /><sub><b>burzynnn</b></sub></a><br /><a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=burzynnn" title="Tests">⚠️</a> <a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=burzynnn" title="Code">💻</a></td>
    <td align="center"><a href="https://christyjacob4.github.io/"><img src="https://avatars.githubusercontent.com/u/20852629?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Christy Jacob</b></sub></a><br /><a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=christyjacob4" title="Documentation">📖</a> <a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=christyjacob4" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/joshharrison626"><img src="https://avatars.githubusercontent.com/u/14062743?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Josh Harrison</b></sub></a><br /><a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=joshharrison626" title="Documentation">📖</a> <a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=joshharrison626" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/JohanAludden"><img src="https://avatars.githubusercontent.com/u/11306?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Johan Aludden</b></sub></a><br /><a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=JohanAludden" title="Code">💻</a></td>
    <td align="center"><a href="http://hipstersmoothie.com/"><img src="https://avatars.githubusercontent.com/u/1192452?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Andrew Lisowski</b></sub></a><br /><a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=hipstersmoothie" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://soubai.me/"><img src="https://avatars.githubusercontent.com/u/11523791?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Abderrahim SOUBAI-ELIDRISI</b></sub></a><br /><a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=AbderrahimSoubaiElidrissi" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/dereklouis"><img src="https://avatars.githubusercontent.com/u/71146953?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Derek Louis</b></sub></a><br /><a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=dereklouis" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/sheetalsingala"><img src="https://avatars.githubusercontent.com/u/15062163?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sheetal Singala</b></sub></a><br /><a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=sheetalsingala" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/salilbc"><img src="https://avatars.githubusercontent.com/u/9673247?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Salil Cuncoliencar</b></sub></a><br /><a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=salilbc" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Ayushisood"><img src="https://avatars.githubusercontent.com/u/63868702?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ayushi</b></sub></a><br /><a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=Ayushisood" title="Documentation">📖</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/swasty/"><img src="https://avatars.githubusercontent.com/u/64654203?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Swastika Gupta</b></sub></a><br /><a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=Swastyy" title="Documentation">📖</a></td>
    <td align="center"><a href="https://someone404.github.io/personal-site/"><img src="https://avatars.githubusercontent.com/u/43281100?v=4?s=100" width="100px;" alt=""/><br /><sub><b>someOne404</b></sub></a><br /><a href="https://github.com/intuit/user-data-for-fraud-prevention/commits?author=someOne404" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
