import uuid from "uuid";

export const getDeviceId = () => {
    return uuid();
}