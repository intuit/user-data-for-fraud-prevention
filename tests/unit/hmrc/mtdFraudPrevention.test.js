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
import * as mtdFraudPrevention from "../../../src/js/hmrc/mtdFraudPrevention";

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
    jest.spyOn(mtdFraudPrevention, "uuid").mockReturnValue("424f48aa-b723-4f97-8a30-d214b43bf372");
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
    expect(headers.get("Gov-Client-Device-ID")).toBe("424f48aa-b723-4f97-8a30-d214b43bf372");
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
    jest.spyOn(mtdFraudPrevention, "uuid").mockReturnValue("23815626-4129-43b7-b3d3-c8b31dd282ca");

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
    expect(headers.get("Gov-Client-Device-ID")).toBe("23815626-4129-43b7-b3d3-c8b31dd282ca");

    expect(errors[0]).toEqual("Something went wrong.");
  });
});