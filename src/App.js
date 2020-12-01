import logo from './logo.svg';
import React from 'react';
import './App.css';
import Homepage from './Homepage'
import Booking from './Booking'
<<<<<<< HEAD
import Checkin from './Checkin';
=======
import Navigation from './Navigation'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
>>>>>>> 177a63b0d6cd225eaa16642c2bbc6832e2e12ccc

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <Homepage /> */}
      {/* <Booking /> */}
      <Checkin />
=======
      <Router>
        
        <Navigation/>
          <Switch>
            <Route path="/" exact component={Homepage}/>
            
            <Route path="/checkout/" exact component={Booking}/>
            
            
          </Switch>
        
      </Router>
>>>>>>> 177a63b0d6cd225eaa16642c2bbc6832e2e12ccc
    </div>
  );
}

export default App;
