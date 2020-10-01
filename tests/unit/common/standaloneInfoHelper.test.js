import { generateClientDeviceID } from "../../../src/js/common/standaloneInfoHelper";

describe("StandaloneInfoHelper", () => {
    it("generateClientDevice", () => {
        const generatedUUID = generateClientDeviceID();
        expect(generatedUUID.split("-").length).toEqual(5);
        expect(generatedUUID.length).toEqual(36);
        expect(typeof generatedUUID).toBe("string");
    });
});

