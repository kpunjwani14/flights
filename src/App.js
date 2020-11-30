import logo from './logo.svg';
import React from 'react';
import './App.css';
import Homepage from './Homepage'
import Booking from './Booking'
import Navigation from './Navigation'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Navigation/>
          <Switch>
            <Route path="/" exact component={Homepage}/>
            
            <Route path="/checkout/" exact component={Booking}/>
            
            
          </Switch>
        
      </Router>
    </div>
  );
}

export default App;
