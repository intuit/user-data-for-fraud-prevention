import sinon from "sinon";
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
import moment from "moment";

describe("FraudPreventionHeaders", () => {
  const spies = sinon.createSandbox();
  resetDeviceIpString();
  resetCandidateString();

  afterEach(() => {
    spies.restore();
    resetDeviceIpString();
    resetCandidateString();
  });
  it("getFraudPreventionHeaders with no errors", async () => {
    spies.stub(globalsUtil, "getNavigator").returns({
      plugins: getMockBrowserPluginDetails(),
      doNotTrack: "yes",
    } as any);
    setAdditionalCandidateString(",127.0.0.2");
    spies
      .stub(globalsUtil, "getWebRTCConnection")
      .returns(MockRTCPeerConnection as any);
    spies.stub(globalsUtil, "getWindow").returns({
      devicePixelRatio: 2,
      innerWidth: 1009,
      innerHeight: 1013,
    } as typeof window);
    spies.stub(globalsUtil, "getScreen").returns({
      width: 1019,
      height: 1021,
      colorDepth: 17,
    } as Screen);

    const { headers, errors } = await getFraudPreventionHeaders();
    expect(headers.size).toBe(6);
    expect(errors.length).toBe(0);
    expect(headers.get("Gov-Client-Timezone")).toBe(
      `UTC${moment().format("Z")}`
    );
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
  });
  it("getFraudPreventionHeaders with one error", async () => {
    spies.stub(globalsUtil, "getNavigator").returns({
      plugins: getMockBrowserPluginDetails(),
      doNotTrack: "yes",
    } as any);
    setAdditionalCandidateString(",127.0.0.2");
    spies
      .stub(globalsUtil, "getWebRTCConnection")
      .returns(MockRTCPeerConnection as any);
    spies.stub(globalsUtil, "getWindow").returns({
      devicePixelRatio: 2,
      innerWidth: 1009,
      innerHeight: 1013,
    } as typeof window);
    spies.stub(globalsUtil, "getScreen").returns({
      width: 1019,
      height: 1021,
      colorDepth: 17,
    } as Screen);
    spies
      .stub(browserInfoHelper, "getDeviceLocalIPAsString")
      .returns(Promise.reject("Something went wrong."));

    const { headers, errors } = await getFraudPreventionHeaders();
    expect(headers.size).toBe(5);
    expect(errors.length).toBe(1);
    expect(headers.get("Gov-Client-Timezone")).toBe(
      `UTC${moment().format("Z")}`
    );
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
    expect(errors[0]).toEqual("Something went wrong.");
  });
});
