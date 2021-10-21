import {
  fraudPreventionHeadersEnum,
  getFraudPreventionHeaders,
  getScreenDetails,
  windowDetails,
  getGovClientBrowserJSUserAgentHeader,
  getGovClientBrowserPluginsHeader,
  getGovClientDeviceID
} from "./hmrc/mtdFraudPrevention";

exports.fraudPreventionHeadersEnum = fraudPreventionHeadersEnum;
exports.getFraudPreventionHeaders = getFraudPreventionHeaders;
exports.getGovClientBrowserPluginsHeader = getGovClientBrowserPluginsHeader;
exports.getGovClientDeviceID = getGovClientDeviceID;
exports.getScreenDetails = getScreenDetails;
exports.getGovClientBrowserJSUserAgentHeader = getGovClientBrowserJSUserAgentHeader;
exports.windowDetails = windowDetails;

