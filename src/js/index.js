import {
  fraudPreventionHeadersEnum,
  getFraudPreventionHeaders,
  getGovClientTimezoneHeader,
  getScreenDetails,
  windowDetails,
} from "./hmrc/mtdFraudPrevention";

exports.fraudPreventionHeadersEnum = fraudPreventionHeadersEnum;
exports.getFraudPreventionHeaders = getFraudPreventionHeaders;
exports.getGovClientTimezoneHeader = getGovClientTimezoneHeader;

exports.getScreenDetails = getScreenDetails;
exports.windowDetails = windowDetails;
