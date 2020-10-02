import { getDeviceId } from "../../../src/js/common/uuidGeneratorHelper";
import globalsUtil from "../../../src/js/common/globalsUtil";

describe("uuidGeneratorHelper", () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    it("getDeviceId", () => {
        jest.spyOn(uuidGeneratorHelper, "getDeviceId").mockReturnValue("424f48aa-b723-4f97-8a30-d214b43bf372");
        expect(getDeviceId()).toEqual("424f48aa-b723-4f97-8a30-d214b43bf372");
    });

});