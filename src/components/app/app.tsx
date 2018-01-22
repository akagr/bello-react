import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import { Home } from '../home/home';
import { Board } from '../board/board';

const styles = require('./app.scss');

export class App extends Component {
  render() {
    return <Router>
      <div className={styles.App}>
        <Route exact path="/" component={Home}></Route>
        <Route path="/:id" component={Board}></Route>
      </div>
    </Router>
  }
}
