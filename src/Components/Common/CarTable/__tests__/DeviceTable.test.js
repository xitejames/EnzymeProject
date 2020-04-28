import React from 'react'
import { shallow } from 'enzyme';
import Table from '@material-ui/core/Table';

import DeviceTable from '../';

describe('DeviceTable: test suite', () => {

    it('Should render DeviceTable', () => {
        const deviceTableWrapper = shallow(<DeviceTable />);
        expect(deviceTableWrapper.exists(Table)).toBe(true);
    })

});