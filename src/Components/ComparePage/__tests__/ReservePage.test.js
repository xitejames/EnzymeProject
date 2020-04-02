import React from 'react'
import { shallow } from 'enzyme';
import Container from '@material-ui/core/Container';

import Reservepage from '../';

describe('Reservepage: test suite', () => {

    it('Should render Reservepage', () => {
        const reservePageWrapper = shallow(<Reservepage />);
        expect(reservePageWrapper.exists(Container)).toBe(true);
    })

});