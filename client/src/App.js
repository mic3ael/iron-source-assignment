import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './features/home/Home.container';
import Repository from './features/repository/Repository.container';
import constants from './constants';

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path={constants.HOME_ROUTER} component={Home} />
            <Route path={constants.REPOSITORY_ROUTER} component={Repository} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
