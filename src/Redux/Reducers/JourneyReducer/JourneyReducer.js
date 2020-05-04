const initialState = {
    journeyList: [],
};

export default function JourneyReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ALL_TO_JOURNEY_LIST':
            return { ...state, journeyList: action.payload }
        default:
            return state;
    };

}
