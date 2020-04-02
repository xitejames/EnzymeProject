import React from 'react'
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Container from '@material-ui/core/Container';
import AvailableDevicePage from '../';

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

describe('AvailableDevicePage: test suite', () => {

    it('Should render AvailableDevicePage', () => {
        const storeWrapper = shallow(<AvailableDevicePage store={store} />).dive();
        const availableDevicePageWrapper = storeWrapper.dive();
        expect(availableDevicePageWrapper.exists(Container)).toBe(true);
    })

});