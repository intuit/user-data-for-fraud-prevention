export {};

declare global {
    interface Window {
        doNotTrack: string;
    }
    interface Navigator {
        msDoNotTrack: string;
    }
    interface External {
        msTrackingProtectionEnabled: () => boolean;
    }
}
