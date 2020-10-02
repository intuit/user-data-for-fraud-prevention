import globalsUtil from "./globalsUtil";

const ICE_CANDIDATE_IP_INDEX = 4;

// store this as a global variable as generating it is expensive and often required several times
let deviceIpString = "";

/**
 * This reset function is valuable only for unit testing
 */
export const resetDeviceIpString = () => {
  deviceIpString = "";
};

/**
 * The function returns the local IP address as a string as an async promise.
 * It uses RTCPeerConnection object's onicecandidate event handler which gets called
 * automatically when a new Ice Candidate is available.
 * @returns {Promise} Promise to get users devices IP address
 */
export const getDeviceLocalIPAsString = () => {
  return new Promise((resolve, reject) => {
    if (deviceIpString) {
      resolve(deviceIpString);
    }
    const WebRTCConnection = globalsUtil.getWebRTCConnection();
    if (!WebRTCConnection) {
      reject({message: "WEBRTC_UNSUPPORTED_BROWSER", error: undefined});
    }
    //RTCPeerConection is supported, so will try to find the IP
    const ip = [];
    let pc;
    try {
      pc = new WebRTCConnection();
    } catch (err) {
      reject({message: "WEBRTC_CONSTRUCTION_FAILED", error: err});
    }

    pc.onicecandidate = (event) => {
      if (!event || !event.candidate) {
        pc.close();
        if (ip.length < 1) {
          reject({message: "NO_IP_FOUND", error: undefined});
        }
        deviceIpString = ip.join(",");
        resolve(deviceIpString);
      }
      else if (event.candidate.candidate) {
        const candidateValues = event.candidate.candidate.split(" ");
        if (candidateValues.length > ICE_CANDIDATE_IP_INDEX) {
          ip.push(candidateValues[ICE_CANDIDATE_IP_INDEX]);
        }
      }
    };
    pc.createDataChannel("");
    pc.createOffer()
        .then(pc.setLocalDescription.bind(pc))
        .catch((err) => {
            reject({message: "CREATE_CONNECTION_ERROR", error: err});
      });
  });
};

/**
 * The function returns all the browsers plugin as a comma seperated string
 * @returns {string} comma seperated users browser plugins
 */
export const getBrowserPluginsAsString = () => {
  return Array.from(globalsUtil.getNavigator().plugins, plugin => plugin && plugin.name)
    .filter((name) => name)
    .join(",");
};

const validateAndGetScreenDetail = (value) => {
  if (isNaN(value)) {
    return null;
  } else {
    return value;
  }
};

const getFormattedOffset = () => {
    // Date().toString() is in format like "Wed Sep 30 2020 23:11:02 GMT+0100 (British Summer Time)"
    // To format the offset, we split on "GMT"
    // and then pick the relevant characters based on their position and reformat with a ":"
    const offset = new Date().toString().split("GMT")[1];
    const hourOffset = `${offset[0]}${offset[1]}${offset[2]}`;
    const minuteOffset = `${offset[3]}${offset[4]}`;
    const formattedUTC = `${hourOffset}:${minuteOffset}`;
    return formattedUTC;
}

/**
 * The function returns users timezone offset relative to UTC
 * @returns {string} UTC concatenated with users broesers offset 
 */
export const getTimezone = () => `UTC${getFormattedOffset()}`;

/**
 * The function returns validated screens width value
 * @returns {string | null} valid value of screens width 
 */
export const getScreenWidth = () =>
  validateAndGetScreenDetail(globalsUtil.getScreen().width);

/**
 * The function returns validated screens height value
 * @returns {string | null} valid value of screens height 
 */
export const getScreenHeight = () =>
  validateAndGetScreenDetail(globalsUtil.getScreen().height);

/**
 * The function returns users validated device pixel ratio
 * @returns {string | null} valid value of windows devicePixelRatio 
 */
export const getScreenScalingFactor = () =>
  validateAndGetScreenDetail(globalsUtil.getWindow().devicePixelRatio);

/**
 * The function returns validated bit depth of the color palette for displaying images
 * @returns {string | null} valid value of screens colorDepth 
 */
export const getScreenColourDepth = () =>
  validateAndGetScreenDetail(globalsUtil.getScreen().colorDepth);

/**
 * The function returns validated interior width of the window in pixels 
 * @returns {string | null} valid value of windows innerWidth 
 */
export const getWindowWidth = () =>
  validateAndGetScreenDetail(globalsUtil.getWindow().innerWidth);

/**
 * The function returns validated interior height of the window in pixels 
 * @returns {string | null} valid value of windows innerHeight 
 */
export const getWindowHeight = () =>
  validateAndGetScreenDetail(globalsUtil.getWindow().innerHeight);

/**
 * The function returns users browser's do not track setting by checking the navigator
 * and window object for the same 
 * @returns {string} true or false based on users Do Not Track setting 
 */
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
