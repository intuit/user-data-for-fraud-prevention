import {
  fraudPreventionHeadersEnum,
  getFraudPreventionHeaders,
  getScreenDetails,
  getGovClientLocalIPsHeader,
  windowDetails,
  getGovClientBrowserPluginsHeader,
} from "./hmrc/mtdFraudPrevention";

exports.fraudPreventionHeadersEnum = fraudPreventionHeadersEnum;
exports.getFraudPreventionHeaders = getFraudPreventionHeaders;
exports.getGovClientBrowserPluginsHeader = getGovClientBrowserPluginsHeader;

exports.getScreenDetails = getScreenDetails;
exports.windowDetails = windowDetails;
exports.getGovClientLocalIPsHeader = getGovClientLocalIPsHeader;
