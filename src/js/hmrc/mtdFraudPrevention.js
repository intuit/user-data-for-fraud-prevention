import {
  getDeviceLocalIPAsString,
  getBrowserDoNotTrackStatus,
  getBrowserPluginsAsString,
  getScreenColourDepth,
  getScreenScalingFactor,
  getScreenHeight,
  getScreenWidth,
  getWindowHeight,
  getWindowWidth,
  getTimezone,
} from "../common/browserInfoHelper";

import {
  generateClientDeviceID,
} from "../common/standaloneInfoHelper";

/**
 * Enum object of keys for each header in the Map returned by getFraudPreventionHeaders().headers
 */
export const fraudPreventionHeadersEnum = {
  TIMEZONE: "Gov-Client-Timezone",
  SCREENS_DETAILS: "Gov-Client-Screens",
  WINDOW_SIZE: "Gov-Client-Window-Size",
  BROWSER_PLUGINS: "Gov-Client-Browser-Plugins",
  BROWSER_DONOTTRACK: "Gov-Client-Browser-Do-Not-Track",
  DEVICE_LOCAL_IPS: "Gov-Client-Local-IPs",
  DEVICE_ID: "Gov-Client-Device-ID",
};

const getScreenDetails = () => {
  const screenDetails = `width=${getScreenWidth()}&height=${getScreenHeight()}&scaling-factor=${getScreenScalingFactor()}&colour-depth=${getScreenColourDepth()}`;
  const thisIsAnExampleOfALintingError = "";
  return encodeURI(screenDetails);
};

const getWindowSize = () => {
  const windowSize = `width=${getWindowWidth()}&height=${getWindowHeight()}`;
  return encodeURI(windowSize);
};

/**
 * Returns Map of HMRC Fraud prevention headers.
 * @returns {object} with two fields headers and errors - The headers are a Map object and the errors are an array. If there are no errors, the array is empty
 */
export const getFraudPreventionHeaders = async () => {
  const headers = new Map();
  const errors = [];
  const headerFunctions = [
    { header: fraudPreventionHeadersEnum.TIMEZONE, callback: getTimezone },
    {
      header: fraudPreventionHeadersEnum.SCREENS_DETAILS,
      callback: getScreenDetails,
    },
    { header: fraudPreventionHeadersEnum.WINDOW_SIZE, callback: getWindowSize },
    {
      header: fraudPreventionHeadersEnum.BROWSER_PLUGINS,
      callback: () => encodeURI(getBrowserPluginsAsString()),
    },
    {
      header: fraudPreventionHeadersEnum.BROWSER_DONOTTRACK,
      callback: getBrowserDoNotTrackStatus,
    },
    {
      header: fraudPreventionHeadersEnum.DEVICE_LOCAL_IPS,
      callback: async () => encodeURI(await getDeviceLocalIPAsString()),
    },
    { header: fraudPreventionHeadersEnum.DEVICE_ID, callback: generateClientDeviceID},
  ];
  for (let i = 0; i < headerFunctions.length; i++) {
    try {
      const { header, callback } = headerFunctions[i];
      const value = await callback();
      headers.set(header, value);
    } catch (error) {
      errors.push(error);
    }
  }
  return { headers, errors };
};
