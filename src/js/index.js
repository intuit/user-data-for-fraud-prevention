import {
  fraudPreventionHeadersEnum,
  getFraudPreventionHeaders,
  getScreenDetails,
  windowDetails,
  getGovClientBrowserPluginsHeader,
  getGovClientDeviceID,
  getGovClientTimezoneHeader,
} from "./hmrc/mtdFraudPrevention";

exports.fraudPreventionHeadersEnum = fraudPreventionHeadersEnum;
exports.getFraudPreventionHeaders = getFraudPreventionHeaders;
exports.getGovClientBrowserPluginsHeader = getGovClientBrowserPluginsHeader;
exports.getGovClientDeviceID = getGovClientDeviceID;
exports.getGovClientTimezoneHeader = getGovClientTimezoneHeader;

exports.getScreenDetails = getScreenDetails;
exports.windowDetails = windowDetails;
