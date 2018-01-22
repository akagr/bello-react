import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { has } from 'lodash';

export class Board extends Component<any, any> {
  private match: any;
  constructor(props: any) {
    super(props);
    this.match = props.match;
  }

  render() {
    if (!has(this.match, 'params.id')) {
      return <h2>Board id missing</h2>;
    }

    return <div>
        <Link to="/">Home</Link>
        <h1>Board {this.match.params.id}</h1>
      </div>
  }
}
