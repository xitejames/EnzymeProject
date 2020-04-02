import { combineReducers } from 'redux';
import CompareReducer from './CompareReducer'
import DeviceReducer from './DeviceReducer'

const rootReducer = combineReducers({
    compare: CompareReducer,
    device: DeviceReducer,
});

export default rootReducer;