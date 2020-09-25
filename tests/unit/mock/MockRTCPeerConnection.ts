let candidateString = "";
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

export class MockRTCPeerConnection {
  str = "";
  onicecandidate: (evt?: any) => void = () => {};

  createDataChannel(str: string) {
    this.str = str;
  }

  createOffer() {
    return new Promise((resolve) => {
      resolve({});
    });
  }

  async setLocalDescription() {
    const evt = {
      candidate: {
        candidate: candidateString,
      },
    };
    this.onicecandidate(evt);
    this.onicecandidate();
  }

  close() {}
}

export class MockErrorRTCPeerConnection extends MockRTCPeerConnection {
  createDataChannel() {
    throw new Error("MockErrorRTCPeerConnection error thrown");
  }
}
