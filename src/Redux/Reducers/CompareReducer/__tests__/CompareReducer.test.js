import { ADD_TO_COMPARE_LIST, REMOVE_FROM_COMPARE_LIST } from '../../../Actions/ActionTypes';
import { addToCompareList, removeFromCompareList } from '../../../Actions/CompareActions';

// https://redux.js.org/recipes/writing-tests

const deviceData = [
    { available: false, id: 1, name: "Macbook pro 1", type: "laptop" },
    { available: false, id: 2, name: "Macbook pro 2", type: "laptop" },
    { available: false, id: 3, name: "Macbook pro 3", type: "laptop" },
]

describe('DeviceReducer', () => {
    it('ADD_TO_COMPARE_LIST correct actionsmp,m', () => {
        const payload = deviceData
        const expectedAction = {
            type: ADD_TO_COMPARE_LIST,
            payload
        }
        expect(addToCompareList(payload)).toEqual(expectedAction);
    })
    it('REMOVE_FROM_COMPARE_LIST correct actions', () => {
        const payload = deviceData
        const expectedAction = {
            type: REMOVE_FROM_COMPARE_LIST,
            payload
        }
        expect(removeFromCompareList(payload)).toEqual(expectedAction);
    })
});