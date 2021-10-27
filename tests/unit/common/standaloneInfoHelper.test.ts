import { generateClientDeviceID } from '../../../src/js/common/helpers/standaloneInfoHelper';

jest.mock('uuid/v4', () => {
    return () => '68a58bc2-3154-465a-b2f7-71e194c55700';
});

describe('StandaloneInfoHelper', () => {
    it('generateClientDevice', () => {
        expect(generateClientDeviceID()).toEqual('68a58bc2-3154-465a-b2f7-71e194c55700');
    });
});
