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

* To get the value for the Gov-Client-Browser-Do-Not-Track HMRC Fraud prevention header:

    ```js
    import getGovClientBrowserDoNotTrackHeader from 'user-data-for-fraud-prevention';
    const {headerValue, error} = getGovClientBrowserDoNotTrackHeader();
    ```