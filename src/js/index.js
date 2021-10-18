import {
  fraudPreventionHeadersEnum,
  getFraudPreventionHeaders,
  getGovClientBrowserDoNotTrackHeader,
  getScreenDetails,
  windowDetails,
} from "./hmrc/mtdFraudPrevention";

exports.fraudPreventionHeadersEnum = fraudPreventionHeadersEnum;
exports.getFraudPreventionHeaders = getFraudPreventionHeaders;
exports.getGovClientBrowserDoNotTrackHeader = getGovClientBrowserDoNotTrackHeader;

exports.getScreenDetails = getScreenDetails;
exports.windowDetails = windowDetails;
