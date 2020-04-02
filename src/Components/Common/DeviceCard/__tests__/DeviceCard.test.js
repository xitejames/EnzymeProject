import React from 'react'
import { shallow } from 'enzyme';
import Paper from '@material-ui/core/Paper';

import DeviceCard from '../';

describe('DeviceCard: test suite', () => {

    it('Should render DeviceCard', () => {
        const deviceCardWrapper = shallow(<DeviceCard />);
        expect(deviceCardWrapper.exists(Paper)).toBe(true);
    })

});