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

## वर्णन

यह उपयोगकर्ता के कुछ ब्राउज़र या डिवाइस विवरण जैसे टाइमज़ोन, स्क्रीन आकार, ब्राउज़र कॉन्फ़िगरेशन इत्यादि का पता लगाने के लिए एक एनपीएम लाइब्रेरी है।
धोखाधड़ी को रोकने के लिए इस तरह के विवरण अक्सर सॉफ्टवेयर प्रदाताओं द्वारा अपने देश में कर प्राधिकरण को भेजे जाने की आवश्यकता होती है।

उदाहरण: यूके में टैक्स अथॉरिटी (HMRC) को सॉफ़्टवेयर प्रदाताओं को अपने कुछ API का उपयोग करने की आवश्यकता होती है ताकि वे लगातार हेडर प्रदान कर सकें जिन्हें धोखाधड़ी रोकथाम हेडर के रूप में जाना जाता है। यह नोड मॉड्यूल आपके लिए आवश्यक प्रारूप में ऐसी जानकारी एकत्र करता है।

`src/js` में प्रत्येक शीर्ष स्तर के फ़ोल्डर का उपयोग के मामले में अधिक विशिष्ट जानकारी के साथ अपना स्वयं का README है। उदा.[HMRC README](src/js/hmrc/README.md)

## कैसे इस्तेमाल करे
उपयोग के निर्देश यहां देखे जा सकते हैं [यहां](./USAGE.md)

## परीक्षण कैसे करें
परिवर्तनों के परीक्षण के निर्देश यहां देखे जा सकते हैं [यहां](./DEMO.md)

## योगदान

हम योगदानकर्ताओं को मुद्दों का दावा करने की अनुमति नहीं देते हैं। 
अगर आपको कुछ दिलचस्प लगता है तो आप रेपो में योगदान कर सकते हैं, पीआर बढ़ाने के लिए स्वतंत्र महसूस करें। 
हमें आपको पहले से बताने की आवश्यकता नहीं है।

1. फोर्क रेपो
1. `yarn` या `npm install` चलाकर स्थानीय रूप से निर्भरता स्थापित करें
1. अपने परिवर्तन करें
1. सुनिश्चित करें कि यह `yarn build` या `npm run build` का उपयोग करके बनाता है
1. `npm test` या `yarn test` के साथ परीक्षण चलाएं (आपने परीक्षण जोड़े, है ना?)
1. अपने उपभोग कोड में या हमारे डेमो प्रोजेक्ट का उपयोग करके अपने परिवर्तनों का परीक्षण करें: [`yarn link`](https://classic.yarnpkg.com/en/docs/cli/link) या [`npm link`](https://docs.npmjs.com/cli/link) चलाएं
1. सुनिश्चित करें कि कोड कवरेज आपके परिवर्तनों से पहले की तुलना में समान या अधिक है
1. सुनिश्चित करें कि प्रतिबद्ध संदेश ठीक से स्वरूपित है: `type(subject): input`. उदाहरण: `chore(prettier): update prettier to 2.x`
1. `master` शाखा के लिए पीआर बनाएं 
1. कोड मालिकों से स्वचालित रूप से समीक्षा करने का अनुरोध किया जाएगा, इसलिए आपके पीआर पर टैग करने की कोई आवश्यकता नहीं है

## अपेक्षित परियोजना संरचना

यहां दिखाई गई संरचना यह है कि आपके कोड को रिपॉजिटरी में कैसे व्यवस्थित किया जाना चाहिए

उदाहरण के लिए आप जिस समस्या का समाधान कर रहे हैं, उसके अनुसार कार्यान्वयन फ़ोल्डर का नाम बदला जाना चाहिए। यूके में HMRC के लिए कोड hmrc नाम के फोल्डर में है।

```
Project
└──src
     └──js
        └──common                // इस फ़ोल्डर में सामान्य और गैर विशिष्ट कोड डाले जाने चाहिए
        └──implementation       // समस्या को हल करने के लिए कार्यान्वयन विशिष्ट कोड इस फ़ोल्डर में होना चाहिए
```

## README में योगदानकर्ता कैसे जुड़ते हैं

इस रेपो में योगदानकर्ता के रूप में स्वयं को जोड़ने के दो तरीके हैं:

1. पीआर में इस निम्नलिखित टिप्पणी को जोड़कर @all-contributors को कॉल करें: **@all-contributors please add [username] for [contributions]**. अधिक जानकारी के लिए कृपया डॉक्स देखें [docs](https://allcontributors.org/docs/en/bot/usage)
1. `npx all-contributors add [username] [contributions]` जोड़ें चलाकर सभी योगदानकर्ता-क्ली का उपयोग करें। अधिक जानकारी के लिए कृपया डॉक्स देखें  [docs](https://allcontributors.org/docs/en/cli/usage) para más info.

सभी मापदंडों की आवश्यकता है। मान्य योगदान प्रकारों की सूची के लिए इमोजी कुंजी (योगदान प्रकार संदर्भ) देखें [Emoji Key (Contribution Types Reference)](https://allcontributors.org/docs/en/emoji-key) 

## लाइसेंस

[License](LICENSE)

## बदलाव का

कृपया हमारा बदलाव का देखें [CHANGELOG](CHANGELOG.md)

## अन्य भाषाएँ
अन्य भाषाओं में रीडमी:

1. [Simplified Chinese](README_SIMPLIFIED_CHINESE.md)
1. [Traditional Chinese](README_TRADITIONAL_CHINESE.md)
2. [Spanish](README_SPANISH.md)
3. [German](README_GERMAN.md)
4. [Hindi](README_HINDI.md)

## योगदानकर्ताओं

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
