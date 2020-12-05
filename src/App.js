import logo from './logo.svg';
import React from 'react';
import './App.css';
import Homepage from './Homepage'
import Booking from './Booking'
import Checkin from './Checkin'
import Navigation from './Navigation'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Summary from './Summary';

function App() {
  return (
    <div className="App">
      <Router>

        <Navigation />
        <Switch>
          <Route path="/" exact component={Homepage} />

          <Route path="/checkout" exact component={Booking} />
          <Route path="/checkin" exact component={Checkin} />

        </Switch>

      </Router>
      {/* <Summary /> */}
    </div>
  );
}

export default App;
