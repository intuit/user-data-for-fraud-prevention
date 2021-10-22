import {
  fraudPreventionHeadersEnum,
  getFraudPreventionHeaders,
  getScreenDetails,
  windowDetails,
  getGovClientBrowserJSUserAgentHeader,
  getGovClientBrowserPluginsHeader,
  getGovClientBrowserDoNotTrackHeader,
  getGovClientDeviceID,
  getGovClientScreensHeader,
} from "./hmrc/mtdFraudPrevention";

exports.fraudPreventionHeadersEnum = fraudPreventionHeadersEnum;
exports.getFraudPreventionHeaders = getFraudPreventionHeaders;
exports.getGovClientBrowserPluginsHeader = getGovClientBrowserPluginsHeader;
exports.getGovClientBrowserDoNotTrackHeader = getGovClientBrowserDoNotTrackHeader;

exports.getGovClientDeviceID = getGovClientDeviceID;
exports.getGovClientScreensHeader = getGovClientScreensHeader;

exports.getScreenDetails = getScreenDetails;
exports.getGovClientBrowserJSUserAgentHeader = getGovClientBrowserJSUserAgentHeader;
exports.windowDetails = windowDetails;
