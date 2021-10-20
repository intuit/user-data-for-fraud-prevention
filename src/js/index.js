import {
  fraudPreventionHeadersEnum,
  getFraudPreventionHeaders,
  getScreenDetails,
  windowDetails,
  getGovClientDeviceIDHeader,
  getGovClientBrowserPluginsHeader,
} from "./hmrc/mtdFraudPrevention";

exports.fraudPreventionHeadersEnum = fraudPreventionHeadersEnum;
exports.getFraudPreventionHeaders = getFraudPreventionHeaders;
exports.getGovClientDeviceIDHeader = getGovClientDeviceIDHeader;
exports.getGovClientBrowserPluginsHeader = getGovClientBrowserPluginsHeader;

exports.getScreenDetails = getScreenDetails;
exports.windowDetails = windowDetails;
