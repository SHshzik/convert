import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

import 'bootstrap/dist/css/bootstrap-grid.min.css';

import Header from './components/Header/Header';
import Currency from './components/Currency/Currency';
import Convert from './components/Convert/Convert';
import { getCurrencyList } from './actions/currency_actions';

const mapDispatchToProps = dispatch => ({
  getCurrencyList: () => dispatch(getCurrencyList()),
});

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrencyList();
  }

  render() {
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
}

export default connect(null, mapDispatchToProps)(App);
