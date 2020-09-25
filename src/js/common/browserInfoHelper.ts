import moment from "moment";
import globalsUtil from "./globalsUtil";

const ICE_CANDIDATE_IP_INDEX = 4;

// store this as a global variable as generating it is expensive and often required several times
let deviceIpString = "";

// This reset function is valuable only for unit testing
export const resetDeviceIpString = () => {
  deviceIpString = "";
};

export const getDeviceLocalIPAsString = () => {
  return new Promise<string>((resolve, reject) => {
    if (deviceIpString) {
      return resolve(deviceIpString);
    }

    const WebRTCConnection = globalsUtil.getWebRTCConnection();
    if (!WebRTCConnection) {
      return reject("WEBRTC_UNSUPPORTED_BROWSER");
    }

    //RTCPeerConection is supported, so will try to find the IP
    const ip: string[] = [];
    let pc: RTCPeerConnection;
    try {
      pc = new WebRTCConnection();
    } catch (err) {
      return reject("WEBRTC_CONSTRUCTION_FAILED");
    }

    pc.onicecandidate = function (event) {
      if (!event || !event.candidate) {
        pc.close();
        if (ip.length < 1) {
          reject("NO_IP_FOUND");
        }
        deviceIpString = ip.join(",");
        resolve(deviceIpString);
      }

      if (event.candidate?.candidate) {
        const candidateValues = event.candidate.candidate.split(" ");
        if (candidateValues.length > ICE_CANDIDATE_IP_INDEX) {
          ip.push(candidateValues[ICE_CANDIDATE_IP_INDEX]);
        }
      }
    };
    pc.createDataChannel("");
    pc.createOffer()
      .then(pc.setLocalDescription.bind(pc))
      .catch((e) => {
        reject("CREATE_CONNECTION_ERROR");
      });
  });
};

export const getBrowserPluginsAsString = () => {
  return Array.from(
    globalsUtil.getNavigator().plugins,
    (plugin) => plugin && plugin.name
  )
    .filter((name) => name)
    .join(",");
};

const validateAndGetScreenDetail = (value: number) => {
  if (isNaN(value)) {
    return null;
  } else {
    return value;
  }
};

export const getTimezone = () => `UTC${moment().format("Z")}`;
export const getScreenWidth = () =>
  validateAndGetScreenDetail(globalsUtil.getScreen().width);
export const getScreenHeight = () =>
  validateAndGetScreenDetail(globalsUtil.getScreen().height);
export const getScreenScalingFactor = () =>
  validateAndGetScreenDetail(globalsUtil.getWindow().devicePixelRatio);
export const getScreenColourDepth = () =>
  validateAndGetScreenDetail(globalsUtil.getScreen().colorDepth);
export const getWindowWidth = () =>
  validateAndGetScreenDetail(globalsUtil.getWindow().innerWidth);
export const getWindowHeight = () =>
  validateAndGetScreenDetail(globalsUtil.getWindow().innerHeight);

export const getBrowserDoNotTrackStatus = () => {
  const windowVar = globalsUtil.getWindow(),
    navigatorVar = globalsUtil.getNavigator();
  /* eslint-disable eqeqeq */
  const isBrowserDoNotTrack =
    (windowVar.doNotTrack && windowVar.doNotTrack == "1") ||
    (navigatorVar.doNotTrack &&
      (navigatorVar.doNotTrack == "yes" || navigatorVar.doNotTrack == "1")) ||
    (navigatorVar.msDoNotTrack && navigatorVar.msDoNotTrack == "1") ||
    (windowVar.external &&
      windowVar.external.msTrackingProtectionEnabled &&
      windowVar.external.msTrackingProtectionEnabled());
  return isBrowserDoNotTrack ? "true" : "false";
};
