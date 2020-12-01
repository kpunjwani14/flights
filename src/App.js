import logo from './logo.svg';
import React from 'react';
import './App.css';
import Homepage from './Homepage'
import Booking from './Booking'
<<<<<<< HEAD
import Navigation from './Navigation'
import Search from './Search'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
=======
import Checkin from './Checkin'
import Navigation from './Navigation'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
>>>>>>> 18691b34e432254411b37d7a2f95d78b57fa28c0

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <Router>

        <Navigation />
        <Switch>
          <Route path="/" exact component={Homepage} />

          <Route path="/checkout/" exact component={Booking} />


        </Switch>

      </Router> */}
      <Search />
=======
      <Router>
        
        <Navigation/>
          <Switch>
            <Route path="/" exact component={Homepage}/>
            
            <Route path="/checkout" exact component={Booking}/>
            <Route path ="/checkin" exact component={Checkin}/>
            
          </Switch>
        
      </Router>
>>>>>>> 18691b34e432254411b37d7a2f95d78b57fa28c0
    </div>
  );
}

export default App;
