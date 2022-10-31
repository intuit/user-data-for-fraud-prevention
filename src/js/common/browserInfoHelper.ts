const ICE_CANDIDATE_IP_INDEX = 4;

// store deviceIpString as a global variable as generating it is expensive and often required several times
const deviceIpData = {
    deviceIpString: '',
    deviceIpTimeStamp: '',
};

/**
 * This reset function is valuable only for unit testing
 */
export const resetDeviceIpString = () => {
    deviceIpData.deviceIpString = '';
};

export const resetDeviceIpTimeStamp = () => {
    deviceIpData.deviceIpTimeStamp = '';
};

/**
 * Function that returns the local IP address as a string as an async promise.
 * It uses RTCPeerConnection object's onicecandidate event handler which gets called
 * automatically when a new Ice Candidate is available.
 * @returns {Promise} Promise to get users devices IP address
 */
export const getDeviceLocalIPAsString = (): Promise<
    typeof deviceIpData
> => {
    return new Promise((resolve, reject) => {
        if (deviceIpData.deviceIpString !== '' && deviceIpData.deviceIpTimeStamp !== '') {
            resolve(deviceIpData);
        }
        const WebRTCConnection = RTCPeerConnection;
        if (!WebRTCConnection) {
            reject({message: 'WEBRTC_UNSUPPORTED_BROWSER', error: undefined});
        }
        //RTCPeerConection is supported, so will try to find the IP
        const ip: string[] = [];
        let pc: RTCPeerConnection;
        try {
            pc = new WebRTCConnection();
        } catch (err) {
            reject({message: 'WEBRTC_CONSTRUCTION_FAILED', error: err});
        }

        pc.onicecandidate = (event) => {
            if (!event || !event.candidate) {
                pc.close();
                if (ip.length < 1) {
                    reject({message: 'NO_IP_FOUND', error: undefined});
                }
                deviceIpData.deviceIpString = ip.join(',');
                deviceIpData.deviceIpTimeStamp = new Date().toISOString();
                resolve(deviceIpData);
            } else if (event.candidate.candidate) {
                const candidateValues = event.candidate.candidate.split(' ');
                if (candidateValues.length > ICE_CANDIDATE_IP_INDEX) {
                    ip.push(candidateValues[ICE_CANDIDATE_IP_INDEX]);
                }
            }
        };
        pc.createDataChannel('');
        pc.createOffer()
            .then(pc.setLocalDescription.bind(pc))
            .catch((err) => {
                reject({message: 'CREATE_CONNECTION_ERROR', error: err});
            });
    });
};

/**
 * Function that returns user's browser's all plugin as a comma separated string
 * @returns {string} comma separated user's browser's plugins
 */
export const getBrowserPluginsAsString = () => {
    return Array.from(navigator.plugins, (plugin) => plugin && plugin.name)
        .filter((name) => name)
        .join(',');
};

const getFormattedOffset = () => {
    // Date().toString() is in format like "Wed Sep 30 2020 23:11:02 GMT+0100 (British Summer Time)"
    // To format the offset, we split on "GMT"
    // and then pick the relevant characters based on their position and reformat with a ":"
    const offset = new Date().toString().split('GMT')[1];
    const hourOffset = `${offset[0]}${offset[1]}${offset[2]}`;
    const minuteOffset = `${offset[3]}${offset[4]}`;
    const formattedUTC = `${hourOffset}:${minuteOffset}`;
    return formattedUTC;
};

/**
 * Function that returns user's timezone offset relative to UTC
 * @returns {string} UTC concatenated with user's browser's timezone offset
 */
export const getTimezone = () => `UTC${getFormattedOffset()}`;

const validateAndGetScreenDetail = (value: number): number | null => {
    if (isNaN(value)) {
        return null;
    } else {
        return value;
    }
};

/**
 * Function that validates the user's screen's width value, and then returns it.
 * If it fails validation, it returns null
 * @returns {number | null} validated value of screen width
 */
export const getScreenWidth = () => validateAndGetScreenDetail(screen.width);

/**
 * Function that validates the user's screen's height value, and then returns it.
 * If it fails validation, it returns null
 * @returns {number | null} validated value of screen height
 */
export const getScreenHeight = () => validateAndGetScreenDetail(screen.height);

/**
 * Function that validates the user's device's pixel ratio, and then returns it.
 * If it fails validation, it returns null
 * @returns {number | null} validated value of window's devicePixelRatio
 */
export const getScreenScalingFactor = () => validateAndGetScreenDetail(window.devicePixelRatio);

/**
 * Function that validates the user's screen's colorDepth, and then returns it.
 * If it fails validation, it returns null
 * @returns {number | null} validated value of screen's colorDepth
 */
export const getScreenColourDepth = () => validateAndGetScreenDetail(screen.colorDepth);

/**
 * Function that validates the user's window's interior width in pixels, and then returns it.
 * If it fails validation, it returns null
 * @returns {number | null} validated value of window's innerWidth
 */
export const getWindowWidth = () => validateAndGetScreenDetail(window.innerWidth);

/**
 * Function that validates the user's window's interior height in pixels, and then returns it.
 * If it fails validation, it returns null
 * @returns {number | null} validated value of window's innerHeight
 */
export const getWindowHeight = () => validateAndGetScreenDetail(window.innerHeight);

/**
 * The function returns users browser's do not track setting by checking the navigator
 * and window object for the same
 * @returns {string} true or false based on users Do Not Track setting
 */
export const getBrowserDoNotTrackStatus = () => {
    const windowVar = window,
        navigatorVar = navigator;
    const isBrowserDoNotTrack =
        (windowVar.doNotTrack && windowVar.doNotTrack === '1') ||
        (navigatorVar.doNotTrack && (navigatorVar.doNotTrack === 'yes' || navigatorVar.doNotTrack === '1')) ||
        (navigatorVar.msDoNotTrack && navigatorVar.msDoNotTrack === '1') ||
        (windowVar.external &&
            windowVar.external.msTrackingProtectionEnabled &&
            windowVar.external.msTrackingProtectionEnabled());
    return isBrowserDoNotTrack ? 'true' : 'false';
};

/**
 * This function returns user agent by checking the navigator
 * @returns {String} user agent for the current browser
 */
export const getUserAgent = () => {
    return navigator.userAgent;
};
