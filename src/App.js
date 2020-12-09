import logo from './logo.svg';
import React from 'react';
import './App.css';
import Homepage from './Homepage'
import Booking from './Booking'
import Navigation from './Navigation'
import Search from './Search'
import Checkin from './Checkin'
import Boarding from './Boarding'
import Erd from './Erd'
import Pass from './Pass'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>

        <Navigation />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/checkin" exact component={Checkin} />
          <Route path="/checkout" exact component={Booking} />
          <Route path="/search" exact component={Search} />
          <Route path="/board" exact component={Boarding} />
          <Route path="/erd" exact component={Erd} />
          <Route path="/pass" exact component={Pass} />


        </Switch>

      </Router>

    </div>
  );
}

export default App;
