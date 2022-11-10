let candidateString = '';
export const setAdditionalCandidateString = (value: string) => {
    candidateString = `abc xyz 123 777 127.0.0.1${value} randomstring somestring`;
};
export const setCandidateString = (value: string) => {
    candidateString = value;
};
export const resetCandidateString = () => {
    candidateString = `abc xyz 123 777 127.0.0.1 randomstring somestring`;
};
export const setEmptyCandidateString = () => {
    candidateString = ``;
};

class MockRTCDataChannel {
    readyState: RTCDataChannelState = 'closed';
    constructor() {
        this.readyState = 'open';
    }

    send() {
        return;
    }
}

export class MockRTCPeerConnection {
    str = '';

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createDataChannel(label: string, dataChannelDict?: RTCDataChannelInit | undefined) {
        this.str = label;
        return new MockRTCDataChannel() as unknown as RTCDataChannel;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createOffer(options?: RTCOfferOptions): Promise<RTCSessionDescriptionInit> {
        return new Promise((resolve) => {
            resolve({} as RTCSessionDescriptionInit);
        });
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setLocalDescription(description?: RTCLocalSessionDescriptionInit): Promise<void> {
        const evt = {
            candidate: {
                candidate: candidateString,
            },
        };
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.onicecandidate(evt);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.onicecandidate();
        return Promise.resolve();
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    close() {}
}

export class MockErrorRTCPeerConnection extends MockRTCPeerConnection {
    createOffer() {
        return Promise.reject();
    }
}
