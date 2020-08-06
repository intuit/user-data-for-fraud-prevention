import sinon from "sinon";
import getMockBrowserPluginDetails from "../mock/MockData";
import {
  MockRTCPeerConnection,
  MockErrorRTCPeerConnection,
  setEmptyCandidateString,
  resetCandidateString,
  setCandidateString,
} from "../mock/MockRTCPeerConnection";
import globalsUtil from "../../../src/js/common/globalsUtil";
import {
  getDeviceLocalIPAsString,
  getBrowserDoNotTrackStatus,
  getBrowserPluginsAsString,
  getScreenColourDepth,
  getScreenScalingFactor,
  getScreenHeight,
  getScreenWidth,
  getWindowHeight,
  getWindowWidth,
  getTimezone,
  resetDeviceIpString,
} from "../../../src/js/common/browserInfoHelper";
import moment from "moment";

describe("BrowserInfoHelper", () => {
  const spies = sinon.createSandbox();

  afterEach(() => {
    spies.restore();
  });

  describe("getBrowserDoNotTrackStatus", () => {
    const getBrowserDoNotTrackStatusTests = [
      {
        test: "window do not track 1",
        mockWindow: {
          doNotTrack: "1",
        },
        expected: "true",
      },
      {
        test: "do not track false",
        mockWindow: {
          doNotTrack: "0",
          external: {
            msTrackingProtectionEnabled: () => false,
          },
        },
        mockNavigator: {
          doNotTrack: "no",
        },
        expected: "false",
      },
      {
        test: "window msTrackingProtectionEnabled",
        mockWindow: {
          external: {
            msTrackingProtectionEnabled: () => true,
          },
        },
        expected: "true",
      },
      {
        test: "navigator doNotTrack yes",
        mockNavigator: {
          doNotTrack: "yes",
        },
        expected: "true",
      },
      {
        test: "navigator doNotTrack 1",
        mockNavigator: {
          doNotTrack: "1",
        },
        expected: "true",
      },
      {
        test: "navigator msDoNotTrack 1",
        mockNavigator: {
          msDoNotTrack: "1",
        },
        expected: "true",
      },
    ];

    getBrowserDoNotTrackStatusTests.forEach(
      ({ test, mockWindow = {}, mockNavigator = {}, expected } = {}) => {
        it(test, () => {
          spies.stub(globalsUtil, "getWindow").returns(mockWindow);
          spies.stub(globalsUtil, "getNavigator").returns(mockNavigator);
          expect(getBrowserDoNotTrackStatus()).toEqual(expected);
        });
      }
    );
  });

  describe("getBrowserPluginsAsString", () => {
    let mockNavigator;

    beforeEach(() => {
      mockNavigator = {
        plugins: [],
      };
    });
    it("getBrowserPluginsAsString no plugins", () => {
      spies.stub(globalsUtil, "getNavigator").returns(mockNavigator);
      expect(getBrowserPluginsAsString()).toEqual("");
    });

    it("getBrowserPluginsAsString two plugins", () => {
      mockNavigator = {
        plugins: getMockBrowserPluginDetails(),
      };
      spies.stub(globalsUtil, "getNavigator").returns(mockNavigator);
      expect(getBrowserPluginsAsString()).toEqual("ABC Plugin,XYZ Plugin");
    });

    it("getBrowserPluginsAsString two plugins and a null plugin", () => {
      mockNavigator = {
        plugins: [...getMockBrowserPluginDetails(), null],
      };
      spies.stub(globalsUtil, "getNavigator").returns(mockNavigator);
      expect(getBrowserPluginsAsString()).toEqual("ABC Plugin,XYZ Plugin");
    });
  });

  describe("getDeviceLocalIPAsString", () => {
    let webRtcConnectionStub;
    beforeEach(() => {
      webRtcConnectionStub = spies.stub(globalsUtil, "getWebRTCConnection");
      resetDeviceIpString();
    });

    afterEach(() => {
      spies.restore();
      resetDeviceIpString();
      resetCandidateString();
    });

    it("RTCPeerConnection undefined", async () => {
      webRtcConnectionStub.returns(undefined);
      try {
        await getDeviceLocalIPAsString();
      } catch (error) {
        expect(error.toString()).toEqual("WEBRTC_UNSUPPORTED_BROWSER");
        return;
      }
      throw new Error("Expected an error to be thrown, but it was not");
    });

    it("RTCPeerConnection non constructable", async () => {
      webRtcConnectionStub.returns({});
      try {
        await getDeviceLocalIPAsString();
      } catch (error) {
        expect(error.toString()).toEqual("WEBRTC_CONSTRUCTION_FAILED");
        return;
      }
      throw new Error("Expected an error to be thrown, but it was not");
    });

    it("RTCPeerConnection throws unexpected error", async () => {
      webRtcConnectionStub.returns(MockErrorRTCPeerConnection);
      try {
        await getDeviceLocalIPAsString();
      } catch (error) {
        expect(error.toString()).toEqual(
          "Error: MockErrorRTCPeerConnection error thrown"
        );
        return;
      }
      throw new Error("Expected an error to be thrown, but it was not");
    });

    it("RTCPeerConnection throws NO_IP_FOUND if candidate string does not have valid IP address as 5th element", async () => {
      setCandidateString("abc xyz 127.0.0.1");
      webRtcConnectionStub.returns(MockRTCPeerConnection);
      try {
        await getDeviceLocalIPAsString();
      } catch (error) {
        expect(error.toString()).toEqual("NO_IP_FOUND");
        return;
      }
      throw new Error("Expected an error to be thrown, but it was not");
    });

    it("RTCPeerConnection throws NO_IP_FOUND for empty candidate string", async () => {
      setEmptyCandidateString();
      webRtcConnectionStub.returns(MockRTCPeerConnection);

      try {
        await getDeviceLocalIPAsString();
      } catch (error) {
        expect(error.toString()).toEqual("NO_IP_FOUND");
        return;
      }
      throw new Error("Expected an error to be thrown, but it was not");
    });

    it("RTCPeerConnection valid", async () => {
      webRtcConnectionStub.returns(MockRTCPeerConnection);
      expect(await getDeviceLocalIPAsString()).toEqual("127.0.0.1");
      //Calling the function to return an already calculated deviceIpString
      expect(await getDeviceLocalIPAsString()).toEqual("127.0.0.1");
    });

    it("RTCPeerConnection returns 5th item in array after splitting", async () => {
      setCandidateString(
        "abc xyz 123 567 789 777 127.0.0.1 randomstring somestring"
      );
      webRtcConnectionStub.returns(MockRTCPeerConnection);
      expect(await getDeviceLocalIPAsString()).toEqual("789");
    });
  });

  it("getMTDTaxReturnWithParameter", async () => {
    spies.stub(globalsUtil, "getNavigator").returns({
      plugins: getMockBrowserPluginDetails(),
      doNotTrack: "yes",
    });
    spies
      .stub(globalsUtil, "getWebRTCConnection")
      .returns(MockRTCPeerConnection);
    spies.stub(globalsUtil, "getWindow").returns({
      devicePixelRatio: 2,
      innerWidth: 1009,
      innerHeight: 1013,
    });
    spies.stub(globalsUtil, "getScreen").returns({
      width: 1019,
      height: 1021,
      colorDepth: 17,
    });
    expect(getTimezone()).toEqual(`UTC${moment().format("Z")}`);
    expect(getScreenWidth()).toEqual(1019);
    expect(getScreenHeight()).toEqual(1021);
    expect(getScreenScalingFactor()).toEqual(2);
    expect(getScreenColourDepth()).toEqual(17);
    expect(getWindowWidth()).toEqual(1009);
    expect(getWindowHeight()).toEqual(1013);
    expect(getBrowserPluginsAsString()).toEqual("ABC Plugin,XYZ Plugin");
    expect(getBrowserDoNotTrackStatus()).toEqual("true");
    expect(await getDeviceLocalIPAsString()).toEqual("127.0.0.1");
  });

  it("getScreen", async () => {
    spies.stub(globalsUtil, "getScreen").returns({
      width: "900px",
      height: 1021,
      colorDepth: 17,
    });
    expect(getScreenWidth()).toEqual(null);
    expect(getScreenHeight()).toEqual(1021);
    expect(getScreenColourDepth()).toEqual(17);
  });
});
