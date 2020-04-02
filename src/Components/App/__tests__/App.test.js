import React from 'react'
import { shallow } from 'enzyme';

import App from '../';

describe('App: test suite', () => {

    it('Should render App', () => {
        const appWrapper = shallow(<App />);
        expect(appWrapper.exists('div')).toBe(true);
    })

});