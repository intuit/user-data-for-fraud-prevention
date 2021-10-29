## Usage

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

If you want only a specific header value, then you can use below functions that are available to get individual header values:

* To get Gov-Client-Browser_plugins HMRC Fraud prevention header:
```js
import {getGovClientBrowserPluginsHeader} from 'user-data-for-fraud-prevention';
const {headerValue, error} = getGovClientBrowserPluginsHeader();
```
* To get Gov-Client-Browser-JS-User-Agent HMRC Fraud prevention header:
```js
import {getGovClientBrowserJSUserAgentHeader} from 'user-data-for-fraud-prevention';
const { headerValue, error } = getGovClientBrowserJSUserAgentHeader();
```
* To get Gov-Client-Device Id HMRC Fraud prevention header:
```js
import {getGovClientDeviceID}from 'user-data-for-fraud-prevention';
const {headerValue, error} = getGovClientDeviceID();
```

* To get Gov-Client-Browser-Do-Not-Track HMRC Fraud prevention header:
```js
import {getGovClientBrowserDoNotTrackHeader} from 'user-data-for-fraud-prevention';
const {headerValue, error} = getGovClientBrowserDoNotTrackHeader();
```

* To get Gov-Client-Timezone HMRC Fraud prevention header:
```js
import {getGovClientTimezoneHeader} from 'user-data-for-fraud-prevention';
const {headerValue, error} = getGovClientTimezoneHeader();
```

* To get Gov-Client-Local-IPs HMRC Fraud prevention header:
```js
import {getGovClientLocalIPsHeader} from 'user-data-for-fraud-prevention';
const {headerValue, error} = await getGovClientLocalIPsHeader();
```

* To get Gov-Client-Window-Size HMRC Fraud prevention header:
```js
import {getGovClientWindowSizeHeader} from 'user-data-for-fraud-prevention';
const {headerValue, error} = getGovClientWindowSizeHeader();
```

* To get Gov-Client-Screens HMRC Fraud prevention header:
```js
import {getGovClientScreensHeader} from 'user-data-for-fraud-prevention';
const {headerValue, error} = getGovClientScreensHeader();
```
