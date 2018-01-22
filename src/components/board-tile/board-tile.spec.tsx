import React from 'react';
import { shallow } from 'enzyme';
import { BoardTile, Board } from './board-tile';

test('<BoardTile /> renders correctly', () => {
  const board: Board = {title: 'Test Board', id: 1}
  const component = shallow(<BoardTile board={board}/>)
  expect(component.length).toBe(1);
});
