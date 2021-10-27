import getMockBrowserPluginDetails from '../mock/MockData';
import {
  MockRTCPeerConnection,
  MockErrorRTCPeerConnection,
  setEmptyCandidateString,
  resetCandidateString,
  setCandidateString,
} from '../mock/MockRTCPeerConnection';
import {
  getDeviceLocalIPAsString,
  getBrowserDoNotTrackStatus,
  getBrowserPluginsAsString,
  getScreenColourDepth,
  getScreenScalingFactor,
  getScreenHeight,
  getScreenWidth,
  getWindowHeight,
  getWindowWidth,
  getTimezone,
  resetDeviceIpString,
  getUserAgent,
} from '../../../src/js/common/helpers/browserInfoHelper';

describe('BrowserInfoHelper', () => {
  let screenSpy, navigatorSpy, windowSpy;

  const mockTimeStamp = '2021-06-03T13:02:22.107Z';
  const mockDate = 'Tue May 14 2019 12:01:58 GMT+0100 (British Summer Time)';


  beforeEach(() => {
    screenSpy = jest.spyOn(global, 'screen', 'get');
    navigatorSpy = jest.spyOn(global, 'navigator', 'get');
    windowSpy = jest.spyOn(global, 'window', 'get');
    jest.spyOn(Date.prototype, 'toString').mockReturnValue(mockDate);
    jest.spyOn(Date.prototype, 'toISOString').mockReturnValue(mockTimeStamp);
    (global as any).RTCPeerConnection = MockRTCPeerConnection;
  });

  afterEach(() => {
    screenSpy.mockRestore();
    navigatorSpy.mockRestore();
    windowSpy.mockRestore();
    jest.resetAllMocks();
  });

  describe('getBrowserDoNotTrackStatus', () => {
    const getBrowserDoNotTrackStatusTests = [
      {
        test: 'window do not track 1',
        mockWindow: {
          doNotTrack: '1',
        },
        expected: 'true',
      },
      {
        test: 'do not track false',
        mockWindow: {
          doNotTrack: '0',
          external: {
            msTrackingProtectionEnabled: () => false,
          },
        },
        mockNavigator: {
          doNotTrack: 'no',
        },
        expected: 'false',
      },
      {
        test: 'window msTrackingProtectionEnabled',
        mockWindow: {
          external: {
            msTrackingProtectionEnabled: () => true,
          },
        },
        expected: 'true',
      },
      {
        test: 'navigator doNotTrack yes',
        mockNavigator: {
          doNotTrack: 'yes',
        },
        expected: 'true',
      },
      {
        test: 'navigator doNotTrack 1',
        mockNavigator: {
          doNotTrack: '1',
        },
        expected: 'true',
      },
      {
        test: 'navigator msDoNotTrack 1',
        mockNavigator: {
          msDoNotTrack: '1',
        },
        expected: 'true',
      },
    ];

    getBrowserDoNotTrackStatusTests.forEach(
      ({ test, mockWindow = {}, mockNavigator = {}, expected }) => {
        // eslint-disable-next-line jest/valid-title
        it(test, () => {
          windowSpy.mockImplementation(() => (mockWindow));
          navigatorSpy.mockImplementation(() => (mockNavigator));
          expect(getBrowserDoNotTrackStatus()).toEqual(expected);
        });
      }
    );
  });

  describe('getBrowserPluginsAsString', () => {
    let mockNavigator;

    beforeEach(() => {
      mockNavigator = {
        plugins: [],
      };
    });
    it('getBrowserPluginsAsString no plugins', () => {
      navigatorSpy.mockImplementation(() => (mockNavigator));
      expect(getBrowserPluginsAsString()).toEqual('');
    });

    it('getBrowserPluginsAsString two plugins', () => {
      mockNavigator = {
        plugins: getMockBrowserPluginDetails(),
      };
      navigatorSpy.mockImplementation(() => (mockNavigator));
      expect(getBrowserPluginsAsString()).toEqual('ABC Plugin,XYZ Plugin');
    });

    it('getBrowserPluginsAsString two plugins and a null plugin', () => {
      mockNavigator = {
        plugins: [...getMockBrowserPluginDetails(), null],
      };
      navigatorSpy.mockImplementation(() => (mockNavigator));
      expect(getBrowserPluginsAsString()).toEqual('ABC Plugin,XYZ Plugin');
    });
  });

  describe('getDeviceLocalIPAsString', () => {
    beforeEach(() => {
      (global as any).RTCPeerConnection = MockRTCPeerConnection;
      resetDeviceIpString();
    });

    afterEach(() => {
      jest.restoreAllMocks();
      resetDeviceIpString();
      resetCandidateString();
    });

    it('RTCPeerConnection undefined', async () => {
      (global as any).RTCPeerConnection = undefined;
      await expect(
        async () => getDeviceLocalIPAsString()
      )
        .rejects
        .toHaveProperty('message', 'WEBRTC_UNSUPPORTED_BROWSER');
    });

    it('RTCPeerConnection non constructable', async () => {
      (global as any).RTCPeerConnection = {};
      await expect(
        async () => getDeviceLocalIPAsString()
      )
        .rejects
        .toHaveProperty('message', 'WEBRTC_CONSTRUCTION_FAILED');
    });

    it('RTCPeerConnection throws CREATE_CONNECTION_ERROR', async() => {
      (global as any).RTCPeerConnection = MockErrorRTCPeerConnection;
      await expect(
        async () => getDeviceLocalIPAsString()
      )
        .rejects
        .toHaveProperty('message', 'CREATE_CONNECTION_ERROR');
    });

    it('RTCPeerConnection throws NO_IP_FOUND if candidate string does not have valid IP address as 5th element', async () => {
      setCandidateString('abc xyz 127.0.0.1');
      (global as any).RTCPeerConnection = MockRTCPeerConnection;
      await expect(
        async () => getDeviceLocalIPAsString()
      )
        .rejects
        .toHaveProperty('message', 'NO_IP_FOUND');
    });

    it('RTCPeerConnection throws NO_IP_FOUND for empty candidate string', async () => {
      setEmptyCandidateString();
      (global as any).RTCPeerConnection = MockRTCPeerConnection;
      await expect(
        async () => getDeviceLocalIPAsString()
      )
        .rejects
        .toHaveProperty('message', 'NO_IP_FOUND');
    });

    it('RTCPeerConnection valid', async () => {
      (global as any).RTCPeerConnection = MockRTCPeerConnection;
      expect(await getDeviceLocalIPAsString()).toEqual({'deviceIpString': '127.0.0.1', 'deviceIpTimeStamp': mockTimeStamp});
      // Calling the function to return an already calculated deviceIpString
      expect(await getDeviceLocalIPAsString()).toEqual({'deviceIpString': '127.0.0.1', 'deviceIpTimeStamp': mockTimeStamp});
    });

    it('RTCPeerConnection returns 5th item in array after splitting', async () => {
      setCandidateString(
        'abc xyz 123 567 789 777 127.0.0.1 randomstring somestring'
      );
      (global as any).RTCPeerConnection = MockRTCPeerConnection;
      expect(await getDeviceLocalIPAsString()).toEqual({'deviceIpString': '789', 'deviceIpTimeStamp': mockTimeStamp});
    });
  });

  it('getMTDTaxReturnWithParameter', async () => {
    navigatorSpy.mockImplementation(() => ({
      plugins: getMockBrowserPluginDetails(),
      doNotTrack: 'yes',
    }));

    windowSpy.mockImplementation(() => ({
      devicePixelRatio: 2,
      innerWidth: 1009,
      innerHeight: 1013,
    }));

    (global as any).RTCPeerConnection = MockRTCPeerConnection;

    screenSpy.mockImplementation(() => ({
      width: 1019,
      height: 1021,
      colorDepth: 17,
    }));

    expect(getTimezone()).toEqual(`UTC+01:00`);
    expect(getScreenWidth()).toEqual(1019);
    expect(getScreenHeight()).toEqual(1021);
    expect(getScreenScalingFactor()).toEqual(2);
    expect(getScreenColourDepth()).toEqual(17);
    expect(getWindowWidth()).toEqual(1009);
    expect(getWindowHeight()).toEqual(1013);
    expect(getBrowserPluginsAsString()).toEqual('ABC Plugin,XYZ Plugin');
    expect(getBrowserDoNotTrackStatus()).toEqual('true');
    expect(await getDeviceLocalIPAsString()).toEqual({'deviceIpString': '127.0.0.1', 'deviceIpTimeStamp': mockTimeStamp});
  });

  it('getUserAgent', async () => {
    const mockedUserAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36';
    navigatorSpy.mockImplementation(() => ({
      userAgent: mockedUserAgent
    }));
    expect(getUserAgent()).toEqual(mockedUserAgent);
  })

  it('getScreen', async () => {
    screenSpy.mockImplementation(() => ({
      width: '900px',
      height: 1021,
      colorDepth: 17,
    }));
    expect(getScreenWidth()).toEqual(null);
    expect(getScreenHeight()).toEqual(1021);
    expect(getScreenColourDepth()).toEqual(17);
  });
});
