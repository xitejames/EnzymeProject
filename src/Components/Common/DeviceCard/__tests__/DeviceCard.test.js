import React from 'react'
import { shallow } from 'enzyme';
import Paper from '@material-ui/core/Paper';

import DeviceCard from '../';

const deviceData = [
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
    },
]


describe('DeviceCard: test suite', () => {

    it('Should render DeviceCard', () => {
        const deviceCardWrapper = shallow(<DeviceCard deviceData={deviceData} />);
        expect(deviceCardWrapper.exists(Paper)).toBe(true);
    })

});