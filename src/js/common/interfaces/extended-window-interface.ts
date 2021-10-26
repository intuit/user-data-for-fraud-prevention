export interface IExtendedWindow extends Window {
    // These are deprecated props and not in standard apis now.
    doNotTrack?: string | null;
    external: Window['external'] & {
        msTrackingProtectionEnabled?: () => boolean;
    };
}