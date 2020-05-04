import { ADD_ALL_TO_DEVICE_LIST } from '../../../Actions/ActionTypes';
import { addAllToDeviceList } from '../../../Actions/DeviceActions';

// https://redux.js.org/recipes/writing-tests

const deviceData = [
    { available: false, id: 1, name: "Macbook pro 1", type: "laptop" },
    { available: false, id: 2, name: "Macbook pro 2", type: "laptop" },
    { available: false, id: 3, name: "Macbook pro 3", type: "laptop" },
]

describe('DeviceReducer', () => {
    it('ADD_TO_COMPARE_LIST correct actions', () => {
        const payload = deviceData
        const expectedAction = {
            type: ADD_ALL_TO_DEVICE_LIST,
            payload
        }
        expect(addAllToDeviceList(payload)).toEqual(expectedAction);
    })

});