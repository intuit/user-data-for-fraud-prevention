import { generateClientDeviceID } from "../../../src/js/common/standaloneInfoHelper";

describe("StandaloneInfoHelper", () => {
    it("generateClientDevice", () => {
        const firstUUID = generateClientDeviceID();
        const secondUUID = generateClientDeviceID();
        expect(firstUUID).not.toEqual(secondUUID);
    });
});

