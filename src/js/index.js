import {
  fraudPreventionHeadersEnum,
  getFraudPreventionHeaders,
  getScreenDetails,
  windowDetails,
<<<<<<< HEAD
  getGovClientDeviceID
=======
  getGovClientBrowserPluginsHeader,
>>>>>>> 4a4e8e4265b57fc7b11e9eb367b4076621ec1d07
} from "./hmrc/mtdFraudPrevention";

exports.fraudPreventionHeadersEnum = fraudPreventionHeadersEnum;
exports.getFraudPreventionHeaders = getFraudPreventionHeaders;
exports.getGovClientBrowserPluginsHeader = getGovClientBrowserPluginsHeader;

exports.getScreenDetails = getScreenDetails;
exports.windowDetails = windowDetails;

exports.getGovClientDeviceID = getGovClientDeviceID;