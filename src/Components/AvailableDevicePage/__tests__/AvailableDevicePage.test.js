import React from 'react'
import { shallow } from 'enzyme';
import Container from '@material-ui/core/Container';

import AvailableDevicePage from '../';

describe('AvailableDevicePage: test suite', () => {

    it('Should render AvailableDevicePage', () => {
        const availableDevicePageWrapper = shallow(<AvailableDevicePage />);
        expect(availableDevicePageWrapper.exists(Container)).toBe(true);
    })

});