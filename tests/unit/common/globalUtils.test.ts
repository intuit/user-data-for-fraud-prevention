import utils from "../../../src/js/common/globalsUtil";

describe("GlobalUtil", () => {
  it("getWindow", () => {
    (global as any).window = "window";
    expect(window).toEqual(utils.getWindow());
  });
  it("getNavigator", () => {
    (global as any).navigator = "navigator";
    expect(navigator).toEqual(utils.getNavigator());
  });
  it("getWebRTCConnection", () => {
    (global as any).RTCPeerConnection = "RTCPeerConnection";
    expect(global.RTCPeerConnection).toEqual(utils.getWebRTCConnection());
  });
  it("getScreen", () => {
    (global as any).screen = "screen";
    expect(screen).toEqual(utils.getScreen());
  });
});
