import utils from "../../../src/js/common/globalsUtil";

describe("GlobalUtil", () => {
    it("getWindow", () => {
        global.window = "window";
        expect(window).toEqual(utils.getWindow());
    });
    it("getNavigator", () => {
        global.navigator = "navigator";
        expect(navigator).toEqual(utils.getNavigator());
    });
    it("getWebRTCConnection", () => {
        global.RTCPeerConnection = "RTCPeerConnection";
        expect(global.RTCPeerConnection).toEqual(utils.getWebRTCConnection());
    });
    it("getScreen", () => {
        global.screen = "screen";
        expect(screen).toEqual(utils.getScreen());
    });
});