import React, { Component, Fragment, Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './app.scss';
import lazyImport from './lazyImport';
import SearchForm from './Form';

const SearchResults = lazyImport('./Results');

const LoadingMessage = () => (
  "I'm loading..."
);

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <SearchForm />

          <Suspense fallback={<LoadingMessage />}>
            <Switch>
              <Route path="/search">
                <SearchResults />
              </Route>
            </Switch>
          </Suspense>
        </Fragment>
      </Router>
    );
  }
}

export default App;
