import React from 'react';
import {shallow} from 'enzyme';

import {App} from './app';

test('<App/> renders correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('h1').length).toBe(1);
});
