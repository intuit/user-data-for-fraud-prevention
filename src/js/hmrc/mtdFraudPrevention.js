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
  getTimezone, getUserAgent,
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
  DEVICE_LOCAL_IPS_TIMESTAMP: "Gov-Client-Local-IPs-Timestamp",
  BROWSER_USER_AGENT: "Gov-Client-Browser-JS-User-Agent",
};

const getScreenData = () => {
  const screenDetails = `width=${getScreenWidth()}&height=${getScreenHeight()}&scaling-factor=${getScreenScalingFactor()}&colour-depth=${getScreenColourDepth()}`;
  return encodeURI(screenDetails);
};

export const getScreenDetails = () => {
  return {
    width: getScreenWidth(),
    height: getScreenHeight(),
    colorDepth: getScreenColourDepth(),
    scalingFactor: getScreenScalingFactor(),
  };
}

const getWindowSize = () => {
  const windowSize = `width=${getWindowWidth()}&height=${getWindowHeight()}`;
  return encodeURI(windowSize);
};

export const windowDetails = () => {
  return {
    width: getWindowWidth(),
    height: getWindowHeight(),
  };
}

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
      callback: getScreenData,
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
    { header: fraudPreventionHeadersEnum.DEVICE_ID, callback: generateClientDeviceID},
    { header: fraudPreventionHeadersEnum.BROWSER_USER_AGENT, callback: getUserAgent },
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

  try {
    const ipAddress = await getDeviceLocalIPAsString();
    headers.set(fraudPreventionHeadersEnum.DEVICE_LOCAL_IPS, encodeURI(ipAddress.deviceIpString));
    headers.set(fraudPreventionHeadersEnum.DEVICE_LOCAL_IPS_TIMESTAMP, ipAddress.deviceIpTimeStamp);
  } catch (error) {
    errors.push(error);
  }

  return { headers, errors };
};
/**
 * Returns "Gov-Client-Browser-JS-User-Agent" header.
 * @returns {object} which has headerValue key having the value of the header or error key if there is an error
 */
export const getGovClientBrowserJSUserAgentHeader = () => {
  try {
    return { headerValue: getUserAgent() };
  } catch (error) {
    return { error };
  }
}

/**
 * Returns the value for Gov-Client-Device-ID HMRC Fraud prevention header.
 */
export const getGovClientDeviceID = () => {
  try {
    return {headerValue: encodeURI(generateClientDeviceID())};
  } catch (error) {
    return {error};
  }
}

/**
 * Returns the value for Gov-Client-Browser-Plugins HMRC Fraud prevention header.
 */
export const getGovClientBrowserPluginsHeader = () => {
  try {
    return {headerValue: encodeURI(getBrowserPluginsAsString())};
  } catch (error) {
    return {error};
  }
}

/**
 * Returns the value for Gov-Client-Browser-Do-Not-Track HMRC Fraud prevention header.
 */
export const getGovClientBrowserDoNotTrackHeader = () => {
  try {
    return {headerValue: getBrowserDoNotTrackStatus()};
  } catch (error) {
    return {error};
  }
}

/**
 * Returns the value for Gov-Client-Timezone HMRC Fraud prevention header.
 * @returns {object} with headerValue field or error field in case of an exception
 */
export const getGovClientTimezoneHeader = () => {
  try {
    return { headerValue: getTimezone()};
  } catch (error) {
    return {error};
  }
}

/**
 * Returns Gov-Client-Local-IPs header value
 * @returns {object} which has header key having the value of the header or error key if there is an error
 */
export const getGovClientLocalIPsHeader = async () => {
  try {
    const ipAddress = await getDeviceLocalIPAsString();
    return {
      headerValue: encodeURI(ipAddress.deviceIpString),
    };
  } catch (error) {
    return { error };
  }
}