import React from 'react'
import { shallow } from 'enzyme';
import List from '@material-ui/core/List';

import SideBarList from '../';

describe('SideBarList: test suite', () => {

    it('Should render SideBarList', () => {
        const sideBarListWrapper = shallow(<SideBarList />);
        expect(sideBarListWrapper.exists(List)).toBe(true);
    })

});