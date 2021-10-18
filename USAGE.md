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
import getGovClientDeviceID from 'user-data-for-fraud-prevention';
const {headerValue, error} = getGovClientDeviceID();
```

To use

```js
const fraudHeaders = await getFraudPreventionHeaders();
// If you need individual headers
const timezoneHeader = fraudHeaders.get('Gov-Client-Timezone');
// Or
const timezoneHeader = fraudHeaders.get(fraudPreventionHeadersEnum.TIMEZONE);
```