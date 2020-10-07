const getWindow = () => window;

const getNavigator = () => navigator;

const getWebRTCConnection = () => RTCPeerConnection;

const getScreen = () => screen;

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
