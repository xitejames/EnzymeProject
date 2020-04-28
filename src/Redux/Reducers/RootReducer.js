import { combineReducers } from 'redux';
// import CarReducer from './JourneyReducer'
import JourneyReducer from './JourneyReducer'

const rootReducer = combineReducers({
    // Cars: CarReducer,
    Journeys: JourneyReducer,
});

export default rootReducer;