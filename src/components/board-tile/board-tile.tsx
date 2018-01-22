import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styles = require('./board-tile.scss');

interface Props {
  board: Board;
}

export interface Board {
  title: string;
  id: string | number;
}

/**
 * Tile representing individual board.
 * Serves as link to actual board.
 *
 * @author Akash Agrawal <akagr@outlook.com>
 * @export
 * @class BoardTile
 * @extends {Component<Props, any>}
 */
export class BoardTile extends Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return <Link className={styles.BoardTile} to={`/${this.props.board.id}`}>
      {this.props.board.title}
    </Link>;
  }
}
