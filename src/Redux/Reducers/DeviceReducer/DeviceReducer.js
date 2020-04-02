const initialState = {
    deviceList: [],
};

export default function DeviceReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ALL_TO_DEVICE_LIST':
            return { ...state, deviceList: action.payload }
        default:
            return state;
    };

}
