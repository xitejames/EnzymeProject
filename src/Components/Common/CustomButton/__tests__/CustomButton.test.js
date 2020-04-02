import React from 'react'
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';

import CustomButton from '../';

describe('CustomButton: test suite', () => {

    it('Should render CustomButton', () => {
        const buttonWrapper = shallow(<CustomButton />);
        expect(buttonWrapper.exists(Button)).toBe(true);
    })

});