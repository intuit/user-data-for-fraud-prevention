import {
  fraudPreventionHeadersEnum,
  getFraudPreventionHeaders,
  getScreenDetails,
  windowDetails,
  getGovClientBrowserHeader,
  getGovClientBrowserPluginsHeader,
} from "./hmrc/mtdFraudPrevention";

exports.fraudPreventionHeadersEnum = fraudPreventionHeadersEnum;
exports.getFraudPreventionHeaders = getFraudPreventionHeaders;
exports.getGovClientBrowserPluginsHeader = getGovClientBrowserPluginsHeader;

exports.getScreenDetails = getScreenDetails;
exports.windowDetails = windowDetails;

exports.getGovClientBrowserHeader = getGovClientBrowserHeader;
