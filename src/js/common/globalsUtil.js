const getWindow = () => {
  return window;
};

const getNavigator = () => {
  return navigator;
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
