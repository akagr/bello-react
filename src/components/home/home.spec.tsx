import React from 'react';
import { shallow } from 'enzyme';

import { Home } from './home';

test('<Home/> renders correctly', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find('h1').length).toBe(1);
});

