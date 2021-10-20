import {
  fraudPreventionHeadersEnum,
  getFraudPreventionHeaders,
  getScreenDetails,
  windowDetails,
  getGovClientBrowserPluginsHeader,
  getGovClientBrowserDoNotTrackHeader,
} from "./hmrc/mtdFraudPrevention";

exports.fraudPreventionHeadersEnum = fraudPreventionHeadersEnum;
exports.getFraudPreventionHeaders = getFraudPreventionHeaders;
exports.getGovClientBrowserPluginsHeader = getGovClientBrowserPluginsHeader;
exports.getGovClientBrowserDoNotTrackHeader = getGovClientBrowserDoNotTrackHeader;

exports.getScreenDetails = getScreenDetails;
exports.windowDetails = windowDetails;
