import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import { Home } from '../home/home';
import { Board } from '../board/board';

export class App extends Component {
  render() {
    return <Router>
      <div>
        <Route exact path="/" component={Home}></Route>
        <Route path="/:id" component={Board}></Route>
      </div>
    </Router>
  }
}
