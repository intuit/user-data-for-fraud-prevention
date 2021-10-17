import {
  fraudPreventionHeadersEnum,
  getFraudPreventionHeaders,
  getScreenDetails,
  windowDetails,
  getGovClientBrowserHeader
} from "./hmrc/mtdFraudPrevention";

exports.fraudPreventionHeadersEnum = fraudPreventionHeadersEnum;
exports.getFraudPreventionHeaders = getFraudPreventionHeaders;

exports.getScreenDetails = getScreenDetails;
exports.windowDetails = windowDetails;

exports.getGovClientBrowserHeader = getGovClientBrowserHeader;
