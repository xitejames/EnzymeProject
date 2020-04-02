const initialState = {
    compareList: [],
};

export default function CompareReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_COMPARE_LIST':
            // We don't want to add 2 of the same id's to the compare reducer
            if (!state.compareList.includes(action.payload)) {
                return { ...state, compareList: [...state.compareList, action.payload] }
            }
            return state

        case 'REMOVE_FROM_COMPARE_LIST':
            if (state.compareList.includes(action.payload)) {
                return { ...state, compareList: [...state.compareList.filter((currentId) => { return currentId !== action.payload })] }
            }
            return state
        default:
            return state;
    };

}
