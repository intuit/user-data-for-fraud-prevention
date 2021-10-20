import {
  fraudPreventionHeadersEnum,
  getFraudPreventionHeaders,
  getScreenDetails,
  windowDetails,
  getGovClientBrowserHeader,
  getGovClientBrowserPluginsHeader,
  getGovClientDeviceID
} from "./hmrc/mtdFraudPrevention";

exports.fraudPreventionHeadersEnum = fraudPreventionHeadersEnum;
exports.getFraudPreventionHeaders = getFraudPreventionHeaders;
exports.getGovClientBrowserPluginsHeader = getGovClientBrowserPluginsHeader;
exports.getGovClientDeviceID = getGovClientDeviceID;
exports.getScreenDetails = getScreenDetails;
exports.getGovClientBrowserHeader = getGovClientBrowserHeader;
exports.windowDetails = windowDetails;

