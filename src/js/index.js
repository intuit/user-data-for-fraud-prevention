import {
  fraudPreventionHeadersEnum,
  getFraudPreventionHeaders,
  getScreenDetails,
  windowDetails,
  getGovClientBrowserPluginsHeader,
  getGovClientDeviceID,
  getGovClientScreensHeader,
} from "./hmrc/mtdFraudPrevention";

exports.fraudPreventionHeadersEnum = fraudPreventionHeadersEnum;
exports.getFraudPreventionHeaders = getFraudPreventionHeaders;
exports.getGovClientBrowserPluginsHeader = getGovClientBrowserPluginsHeader;
exports.getGovClientDeviceID = getGovClientDeviceID;
exports.getGovClientScreensHeader = getGovClientScreensHeader;

exports.getScreenDetails = getScreenDetails;
exports.windowDetails = windowDetails;
