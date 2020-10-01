import { getDeviceId } from "../../../src/js/common/uuidGeneratorHelper";
import globalsUtil from "../../../src/js/common/globalsUtil";

describe("uuidGeneratorHelper", () => {
    jest.spyOn(globalsUtil, "getDeviceId").mockReturnValue({
        uuid: "424f48aa-b723-4f97-8a30-d214b43bf372",
    });
    it("getDeviceId", () => {
        const getUUID = getDeviceId();
        expect(getUUID).toEqual("424f48aa-b723-4f97-8a30-d214b43bf372");
    });
});