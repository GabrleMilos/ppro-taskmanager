import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import {Login} from "./components/authentication/Login";
import {Register} from "./components/authentication/Register";
import {ProjectList} from"./components/project/ProjectList"
import {TaskList} from"./components/task/TaskList"
import {NewTask} from "./components/task/NewTask";
import {NewProject} from "./components/project/NewProject";
import {UpdateTask} from "./components/task/UpdateTask";
import {UpdateProject} from "./components/project/UpdateProject";
class App extends Component {

    render() {
        return (
            <Router>
                <Navbar/>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>

                    <Route path='/task/index' component={TaskList}/>
                    <Route path='/task/new' component={NewTask}/>
                    <Route path='/task/update' component={UpdateTask}/>

                    <Route path='/project/index' component={ProjectList}/>
                    <Route path='/project/new' component={NewProject}/>
                    <Route path='/project/update' component={UpdateProject}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
