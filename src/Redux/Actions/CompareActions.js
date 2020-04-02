import { ADD_TO_COMPARE_LIST, REMOVE_FROM_COMPARE_LIST } from './ActionTypes';

export function addToCompareList(payload) {
    return { type: ADD_TO_COMPARE_LIST, payload }
}

export function removeFromCompareList(payload) {
    return { type: REMOVE_FROM_COMPARE_LIST, payload }
}
