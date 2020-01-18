import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap-grid.min.css';

import Header from './components/Header/Header';
import Currency from './components/Currency/Currency';
import Convert from './components/Convert/Convert';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <div className="container">
          <Switch>
            <Route path="/currency">
              <Currency/>
            </Route>
            <Route exact path="/">
              <Convert/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
