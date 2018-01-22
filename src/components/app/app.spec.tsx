import React from 'react';
import { shallow } from 'enzyme';

import { App } from './app';
import { BrowserRouter as Router } from 'react-router-dom';

test('<App/> renders correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Router).length).toBe(1);
});
