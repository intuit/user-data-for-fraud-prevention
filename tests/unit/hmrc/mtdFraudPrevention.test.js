import getMockBrowserPluginDetails from "../mock/MockData";
import {
  getFraudPreventionHeaders,
  getScreenDetails,
  windowDetails,
} from "../../../src/js";
import {
  MockRTCPeerConnection,
  setAdditionalCandidateString,
  resetCandidateString,
} from "../mock/MockRTCPeerConnection";
import * as browserInfoHelper from "../../../src/js/common/browserInfoHelper";
import { resetDeviceIpString, resetDeviceIpTimeStamp } from "../../../src/js/common/browserInfoHelper";
import uuid from "uuid";
import {getGovClientBrowserPluginsHeader} from "../../../src/js/hmrc/mtdFraudPrevention";

describe("FraudPreventionHeaders", () => {
  resetDeviceIpString();
  resetDeviceIpTimeStamp();
  resetCandidateString();
  let screenSpy, navigatorSpy, windowSpy;

  beforeEach(() => {
    screenSpy = jest.spyOn(global, 'screen', 'get');
    navigatorSpy = jest.spyOn(global, 'navigator', 'get');
    windowSpy = jest.spyOn(global, 'window', 'get');
    global.RTCPeerConnection = MockRTCPeerConnection;
  });

  afterEach(() => {
    screenSpy.mockRestore();
    navigatorSpy.mockRestore();
    windowSpy.mockRestore();
    jest.resetAllMocks();
    resetDeviceIpString();
    resetCandidateString();
  });

  const mockTimeStamp = "2021-06-03T13:02:22.107Z"
  global.Date = class DateMock {
      constructor() {
      }
      toString() {
          return "Tue May 14 2019 12:01:58 GMT+0100 (British Summer Time)";
      }
      toISOString() {
        return mockTimeStamp;
    }
  };

  it("getFraudPreventionHeaders with no errors", async () => {
    navigatorSpy.mockImplementation(() => ({
      plugins: getMockBrowserPluginDetails(),
      doNotTrack: "yes",
    }));

    setAdditionalCandidateString(",127.0.0.2");
    windowSpy.mockImplementation(() => ({
      devicePixelRatio: 2,
      innerWidth: 1009,
      innerHeight: 1013,
    }));

    screenSpy.mockImplementation(() => ({
      width: 1019,
      height: 1021,
      colorDepth: 17,
    }));

    jest.spyOn(uuid, "v4").mockReturnValue("134b0eb1-4e27-40a3-82b7-ab28f7d5ee79");

    const {headers, errors} = await getFraudPreventionHeaders();
    expect(headers.size).toBe(9);
    expect(errors.length).toBe(0);
    expect(headers.get("Gov-Client-Timezone")).toBe(`UTC+01:00`);
    expect(headers.get("Gov-Client-Screens")).toBe(
      "width=1019&height=1021&scaling-factor=2&colour-depth=17"
    );
    expect(headers.get("Gov-Client-Window-Size")).toBe(
      "width=1009&height=1013"
    );
    expect(headers.get("Gov-Client-Browser-Plugins")).toBe(
      "ABC%20Plugin,XYZ%20Plugin"
    );
    expect(headers.get("Gov-Client-Browser-Do-Not-Track")).toBe("true");
    expect(headers.get("Gov-Client-Local-IPs")).toBe("127.0.0.1,127.0.0.2");
    expect(headers.get("Gov-Client-Local-IPs-Timestamp")).toBe(mockTimeStamp);
    expect(headers.get("Gov-Client-Device-ID")).toEqual("134b0eb1-4e27-40a3-82b7-ab28f7d5ee79");
  });
  it("getFraudPreventionHeaders with one error", async () => {

    navigatorSpy.mockImplementation(() => ({
      plugins: getMockBrowserPluginDetails(),
      doNotTrack: "yes",
    }));

    setAdditionalCandidateString(",127.0.0.2");

    windowSpy.mockImplementation(() => ({
      devicePixelRatio: 2,
      innerWidth: 1009,
      innerHeight: 1013,
    }));

    screenSpy.mockImplementation(() => ({
      width: 1019,
      height: 1021,
      colorDepth: 17,
    }));

    const timeZoneMock = jest.spyOn(browserInfoHelper, "getTimezone").mockReturnValue(Promise.reject("Something went wrong."));
    jest.spyOn(uuid, "v4").mockReturnValue("fce4f7ff-d5f1-4e4f-99a1-aa97bef71e99");

    const {headers, errors} = await getFraudPreventionHeaders();
    expect(headers.size).toBe(8);
    expect(errors.length).toBe(1);
    expect(headers.get("Gov-Client-Timezone")).toBe(undefined);
    expect(headers.get("Gov-Client-Screens")).toBe(
      "width=1019&height=1021&scaling-factor=2&colour-depth=17"
    );
    expect(headers.get("Gov-Client-Window-Size")).toBe(
      "width=1009&height=1013"
    );
    expect(headers.get("Gov-Client-Browser-Plugins")).toBe(
      "ABC%20Plugin,XYZ%20Plugin"
    );
    expect(headers.get("Gov-Client-Browser-Do-Not-Track")).toBe("true");
    expect(headers.get("Gov-Client-Local-IPs")).toBe("127.0.0.1,127.0.0.2");
    expect(headers.get("Gov-Client-Local-IPs-Timestamp")).toBe(mockTimeStamp);
    expect(headers.get("Gov-Client-Device-ID")).toEqual("fce4f7ff-d5f1-4e4f-99a1-aa97bef71e99");
    expect(errors[0]).toEqual("Something went wrong.");
    timeZoneMock.mockRestore();
  });

  it("getFraudPreventionHeaders with one error (getDeviceLocalIPAsString)", async () => {

    navigatorSpy.mockImplementation(() => ({
      plugins: getMockBrowserPluginDetails(),
      doNotTrack: "yes",
    }));

    setAdditionalCandidateString(",127.0.0.2");

    windowSpy.mockImplementation(() => ({
      devicePixelRatio: 2,
      innerWidth: 1009,
      innerHeight: 1013,
    }));

    screenSpy.mockImplementation(() => ({
      width: 1019,
      height: 1021,
      colorDepth: 17,
    }));

    const deviceLocalIpMock = jest.spyOn(browserInfoHelper, "getDeviceLocalIPAsString").mockReturnValue(Promise.reject("Something went wrong."));
    jest.spyOn(uuid, "v4").mockReturnValue("fce4f7ff-d5f1-4e4f-99a1-aa97bef71e99");

    const {headers, errors} = await getFraudPreventionHeaders();
    expect(headers.size).toBe(7);
    expect(errors.length).toBe(1);
    expect(headers.get("Gov-Client-Timezone")).toBe(`UTC+01:00`);
    expect(headers.get("Gov-Client-Screens")).toBe(
      "width=1019&height=1021&scaling-factor=2&colour-depth=17"
    );
    expect(headers.get("Gov-Client-Window-Size")).toBe(
      "width=1009&height=1013"
    );
    expect(headers.get("Gov-Client-Browser-Plugins")).toBe(
      "ABC%20Plugin,XYZ%20Plugin"
    );
    expect(headers.get("Gov-Client-Browser-Do-Not-Track")).toBe("true");
    expect(headers.get("Gov-Client-Local-IPs")).toBe(undefined);
    expect(headers.get("Gov-Client-Local-IPs-Timestamp")).toBe(undefined);
    expect(headers.get("Gov-Client-Device-ID")).toEqual("fce4f7ff-d5f1-4e4f-99a1-aa97bef71e99");
    expect(errors[0]).toEqual("Something went wrong.");
    deviceLocalIpMock.mockRestore();
  });

  describe("screen details", () => {
    beforeEach(() => {
      screenSpy.mockImplementation(() => ({
        width: 1019,
        height: 1021,
        colorDepth: 17,
      }));
      windowSpy.mockImplementation(() => ({
        devicePixelRatio: 2,
      }));
    });
    it("width", () => expect(getScreenDetails().width).toBe(1019));
    it("height", () => expect(getScreenDetails().height).toBe(1021));
    it("color depth", () => expect(getScreenDetails().colorDepth).toBe(17));
    it("scaling factor", () => expect(getScreenDetails().scalingFactor).toBe(2));
  });
  describe("window details", () => {
    beforeEach(() => {
      windowSpy.mockImplementation(() => ({
        innerWidth: 1009,
        innerHeight: 1013,
      }));
    });
    it("width", () => expect(windowDetails().width).toBe(1009));
    it("height", () => expect(windowDetails().height).toBe(1013));
  });

});

describe("getGovClientBrowserPluginsHeader", () => {
 let navigatorSpy;

  beforeEach(() => {
    navigatorSpy = jest.spyOn(global, 'navigator', 'get');
  });

  it("no error", () => {
    navigatorSpy.mockImplementation(() => ({
      plugins: getMockBrowserPluginDetails(),
      doNotTrack: "yes",
    }));
    const {headerValue, error} = getGovClientBrowserPluginsHeader();
    expect(error).toBe(undefined);
    expect(headerValue).toBe("ABC%20Plugin,XYZ%20Plugin");
  });

  it("getGovClientBrowserPluginsHeader throws error", () => {

    const timeZoneMock = jest.spyOn(browserInfoHelper, "getBrowserPluginsAsString").mockImplementation(() => { throw Error("Something went wrong.")});
    const {headerValue, error} = getGovClientBrowserPluginsHeader();
    expect(error).toEqual(Error("Something went wrong."));
    expect(headerValue).toBe(undefined);
  });

});
