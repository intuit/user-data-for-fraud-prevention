export interface ExtendedNavigator extends Navigator {
  msDoNotTrack?: Navigator["doNotTrack"];
}

export interface WindowWithTracking extends Window {
  external: Window["external"] & {
    msTrackingProtectionEnabled?: () => boolean;
  };
}

const getWindow = () => {
  return window as WindowWithTracking;
};

const getNavigator = () => {
  return navigator as ExtendedNavigator;
};

const getWebRTCConnection = () => {
  return RTCPeerConnection;
};

const getScreen = () => {
  return screen;
};

const utils = {
  getWindow,
  getNavigator,
  getWebRTCConnection,
  getScreen,
};
export default {
  default: utils,
  getWindow,
  getNavigator,
  getWebRTCConnection,
  getScreen,
};
