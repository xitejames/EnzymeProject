import React from 'react'
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

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

import App from '../';

describe('App: test suite', () => {

    it('Should render App', () => {
        const storeWrapper = shallow(<Provider store={store}><App /></Provider>).dive();
        const appWrapper = storeWrapper.dive();
        expect(appWrapper.exists('div')).toBe(true);
    })

});