import {
  fraudPreventionHeadersEnum,
  getFraudPreventionHeaders,
  getGovClientScreensHeader,
  getScreenDetails,
  windowDetails,
} from "./hmrc/mtdFraudPrevention";

exports.fraudPreventionHeadersEnum = fraudPreventionHeadersEnum;
exports.getFraudPreventionHeaders = getFraudPreventionHeaders;
exports.getGovClientScreensHeader = getGovClientScreensHeader;

exports.getScreenDetails = getScreenDetails;
exports.windowDetails = windowDetails;
