import React, { Component, Fragment } from 'react';
import Home from './Home';
import { Normalize } from '@smooth-ui/core-sc';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Normalize />
        <Home />
      </Fragment>
    );
  }
}

export default App;
