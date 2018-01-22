import React, { Component } from 'react';
import { Board, BoardTile } from '../board-tile/board-tile';
import { map } from 'lodash';

const styles = require('./home.scss');

export class Home extends Component {
  private boards: Array<Board> = [
    {title: 'Board 1', id: 1},
    {title: 'Board 2', id: 2}
  ];
  render() {
    return <div className={styles.Home}>
        <h1>My Boards</h1>
        <div className={styles.BoardTiles}>
          {map(this.boards, board => <BoardTile
            board={board}
            key={board.id}></BoardTile>)}
        </div>
      </div>
  }
}
