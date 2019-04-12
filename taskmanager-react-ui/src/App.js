import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Login} from './components/authorization/Login';
import {Error} from "./components/Error";
import {Navigation} from "./components/navigation/Navigation";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navigation/>
            <Switch>
              <Route path={"/login"} component={Login}/>
              <Route component={Error}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
