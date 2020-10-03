import { generateClientDeviceID } from "../../../src/js/common/standaloneInfoHelper";
import uuid from "uuid";

describe("StandaloneInfoHelper", () => {
    it("generateClientDevice", () => {
        jest.spyOn(uuid, "v4").mockReturnValue("68a58bc2-3154-465a-b2f7-71e194c55700");
        expect(generateClientDeviceID()).toEqual("68a58bc2-3154-465a-b2f7-71e194c55700");
    });
});

