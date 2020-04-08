import React from 'react'
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Container from '@material-ui/core/Container';
import AvailableDevicePage from '../';
import fetchMock from 'fetch-mock-jest';

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

const mockDeviceData = [
    {
      "id": 1,
      "name": "Macbook pro 1",
      "available": false,
      "type": "laptop"
    },
    {
      "id": 2,
      "name": "Macbook pro 2",
      "available": true,
      "type": "laptop"
    },
    {
      "id": 3,
      "name": "Macbook pro 3",
      "available": false,
      "type": "laptop"
    }
]

const store = mockStore(initialState);

describe('AvailableDevicePage: test suite', () => {

    it('Should render AvailableDevicePage', () => {
        const storeWrapper = shallow(<AvailableDevicePage store={store} />).dive();
        const availableDevicePageWrapper = storeWrapper.dive();
        expect(availableDevicePageWrapper.exists(Container)).toBe(true);
    })


    it('AvailableDevicePage component did mount fetches', async () => {
        fetchMock
            .mock('http://localhost:4000/Devices', request => {
                return {
                    status: 200,
                    body: mockDeviceData
                }
            })
        const storeWrapper = shallow(<AvailableDevicePage store={store} />).dive();
        const storeData = storeWrapper.prop("store").getState();

        waitFor(() => storeData.device.deviceList === [], () => console.log('got you'))
        console.log(storeData.device.deviceList)
        //expect(fetchMock).toHaveBeenCalledWith('http://localhost:4000/Devices')
    })

});

function waitFor(condition, callback) {
    if(condition) {
        console.log('waiting');
        window.setTimeout(waitFor.bind(null, condition, callback), 1000); /* this checks the flag every 100 milliseconds*/
    } else {
        console.log('done');
        callback();
    }
}