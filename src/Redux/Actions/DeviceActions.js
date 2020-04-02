import { ADD_ALL_TO_DEVICE_LIST } from './ActionTypes';

export function addAllToDeviceList(payload) {
    return { type: ADD_ALL_TO_DEVICE_LIST, payload }
}