import {
  fraudPreventionHeadersEnum,
  getFraudPreventionHeaders,
  getScreenDetails,
  windowDetails,
  getGovClientBrowserJSUserAgentHeader,
  getGovClientBrowserPluginsHeader,
  getGovClientBrowserDoNotTrackHeader,
  getGovClientDeviceID,
  getGovClientTimezoneHeader,
  getGovClientLocalIPsHeader,
  getGovClientScreensHeader,
} from "./hmrc/mtdFraudPrevention";

exports.fraudPreventionHeadersEnum = fraudPreventionHeadersEnum;
exports.getFraudPreventionHeaders = getFraudPreventionHeaders;
exports.getGovClientBrowserPluginsHeader = getGovClientBrowserPluginsHeader;
exports.getGovClientBrowserDoNotTrackHeader = getGovClientBrowserDoNotTrackHeader;

exports.getGovClientDeviceID = getGovClientDeviceID;
exports.getGovClientTimezoneHeader = getGovClientTimezoneHeader;
exports.getGovClientScreensHeader = getGovClientScreensHeader;

exports.getGovClientLocalIPsHeader = getGovClientLocalIPsHeader;
exports.getScreenDetails = getScreenDetails;
exports.getGovClientBrowserJSUserAgentHeader = getGovClientBrowserJSUserAgentHeader;
exports.windowDetails = windowDetails;
