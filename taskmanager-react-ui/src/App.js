import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import {Login} from "./components/authentication/Login";
import {Register} from "./components/authentication/Register";
import {ProjectList} from"./components/project/ProjectList"
import {TaskList} from"./components/task/TaskList"

class App extends Component {
    render() {
        return (
            <Router>
                <Navbar/>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/project/index' component={ProjectList}/>
                    <Route path='/task/index' component={TaskList}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
