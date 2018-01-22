import React from 'react';
import { shallow } from 'enzyme';

import { Board } from './board';

test('<Board/> renders without params', () => {
  const wrapper = shallow(<Board />);
  expect(wrapper.find('h2').length).toBe(1);
});

test('<Board/> renders correctly with url params', () => {
  const urlParams = {params: {id: 123}};
  const wrapper = shallow(<Board match={urlParams} />);
  expect(wrapper.find('h1').length).toBe(1);
});

