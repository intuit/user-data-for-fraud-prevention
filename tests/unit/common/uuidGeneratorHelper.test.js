import { getDeviceId } from "../../../src/js/common/uuidGeneratorHelper";
import * as uuidGeneratorHelper from "../../../src/js/common/uuidGeneratorHelper";

describe("uuidGeneratorHelper", () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    it("getDeviceId", () => {
        jest.spyOn(uuidGeneratorHelper, "getDeviceId").mockReturnValue("424f48aa-b723-4f97-8a30-d214b43bf372");
        expect(getDeviceId()).toEqual("424f48aa-b723-4f97-8a30-d214b43bf372");
    });
    it("getDeviceId", () => {
        expect(getDeviceId()).not.toBe("a0969aa2-2c4c-46c0-9587-4913379a7a05");
    });

});