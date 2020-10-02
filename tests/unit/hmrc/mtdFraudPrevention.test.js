import getMockBrowserPluginDetails from "../mock/MockData";
import { getFraudPreventionHeaders } from "../../../src/js";
import {
  MockRTCPeerConnection,
  setAdditionalCandidateString,
  resetCandidateString,
} from "../mock/MockRTCPeerConnection";
import globalsUtil from "../../../src/js/common/globalsUtil";
import * as browserInfoHelper from "../../../src/js/common/browserInfoHelper";
import { resetDeviceIpString } from "../../../src/js/common/browserInfoHelper";
import {generateClientDeviceID} from "../../../src/js/common/standaloneInfoHelper";
import uuid from "uuid";

describe("FraudPreventionHeaders", () => {
  resetDeviceIpString();
  resetCandidateString();

  afterEach(() => {
    jest.resetAllMocks();
    resetDeviceIpString();
    resetCandidateString();
  });
  it("getFraudPreventionHeaders with no errors", async () => {
    jest.spyOn(globalsUtil, "getNavigator").mockReturnValue({
      plugins: getMockBrowserPluginDetails(),
      doNotTrack: "yes",
    });
    setAdditionalCandidateString(",127.0.0.2");
    jest.spyOn(globalsUtil, "getWebRTCConnection").mockReturnValue(MockRTCPeerConnection);
    jest.spyOn(globalsUtil, "getWindow").mockReturnValue({
      devicePixelRatio: 2,
      innerWidth: 1009,
      innerHeight: 1013,
    });
    jest.spyOn(globalsUtil, "getScreen").mockReturnValue({
      width: 1019,
      height: 1021,
      colorDepth: 17,
    });
    jest.spyOn(uuid, "v4").mockReturnValue("134b0eb1-4e27-40a3-82b7-ab28f7d5ee79");
    global.Date = class DateMock {
        constructor() {
        }
        toString() {
            return "Tue May 14 2019 12:01:58 GMT+0100 (British Summer Time)";
        }
    };

    const {headers, errors} = await getFraudPreventionHeaders();
    expect(headers.size).toBe(7);
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
    expect(headers.get("Gov-Client-Device-ID")).toEqual("134b0eb1-4e27-40a3-82b7-ab28f7d5ee79");
  });
  it("getFraudPreventionHeaders with one error", async () => {
    jest.spyOn(globalsUtil, "getNavigator").mockReturnValue({
      plugins: getMockBrowserPluginDetails(),
      doNotTrack: "yes",
    });
    setAdditionalCandidateString(",127.0.0.2");
    jest.spyOn(globalsUtil, "getWebRTCConnection").mockReturnValue(MockRTCPeerConnection);
    jest.spyOn(globalsUtil, "getWindow").mockReturnValue({
      devicePixelRatio: 2,
      innerWidth: 1009,
      innerHeight: 1013,
    });
    jest.spyOn(globalsUtil, "getScreen").mockReturnValue({
      width: 1019,
      height: 1021,
      colorDepth: 17,
    });
    jest.spyOn(browserInfoHelper, "getDeviceLocalIPAsString").mockReturnValue(Promise.reject("Something went wrong."));
    jest.spyOn(uuid, "v4").mockReturnValue("fce4f7ff-d5f1-4e4f-99a1-aa97bef71e99");

    const {headers, errors} = await getFraudPreventionHeaders();
    expect(headers.size).toBe(6);
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
    expect(headers.get("Gov-Client-Device-ID")).toEqual("fce4f7ff-d5f1-4e4f-99a1-aa97bef71e99");
    expect(errors[0]).toEqual("Something went wrong.");
  });
});
