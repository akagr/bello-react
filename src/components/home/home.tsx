import React, { Component } from 'react';
import { Board, BoardTile } from '../board-tile/board-tile';
import { map } from 'lodash';

export class Home extends Component {
  private boards: Array<Board> = [
    {title: 'Board 1', id: 1},
    {title: 'Board 2', id: 2}
  ];
  render() {
    return <div>
        <h1>Home</h1>
        {map(this.boards, board => <BoardTile
          board={board}
          key={board.id}></BoardTile>)}
      </div>
  }
}
