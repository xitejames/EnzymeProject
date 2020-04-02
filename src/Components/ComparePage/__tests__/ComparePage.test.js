import React from 'react'
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Container from '@material-ui/core/Container';
import ComparePage from '../';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
    device: {
        deviceList: []
    },
    compare: {
        compareList: []
    }
}
const store = mockStore(initialState);

describe('ComparePage: test suite', () => {

    it('Should render ComparePage', () => {
        const storeWrapper = shallow(<ComparePage store={store}/>).dive();
        const comparePageWrapper = storeWrapper.dive();
        expect(comparePageWrapper.exists(Container)).toBe(true);
    })

});