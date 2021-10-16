import {
  fraudPreventionHeadersEnum,
  getFraudPreventionHeaders,
  getScreenDetails,
  getGovClientLocalIPsHeader,
  windowDetails,
} from "./hmrc/mtdFraudPrevention";

exports.fraudPreventionHeadersEnum = fraudPreventionHeadersEnum;
exports.getFraudPreventionHeaders = getFraudPreventionHeaders;

exports.getScreenDetails = getScreenDetails;
exports.windowDetails = windowDetails;
