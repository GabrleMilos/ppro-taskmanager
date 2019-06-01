import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navbar} from "./components/navigation/Navbar";
import {Login} from "./components/authentication/Login";
import {Register} from "./components/authentication/Register";
import {ProjectList} from "./components/project/ProjectList"
import {TaskList} from "./components/task/TaskList"
import {NewTask} from "./components/task/NewTask";
import {NewProject} from "./components/project/NewProject";
import {UpdateTask} from "./components/task/UpdateTask";
import {UpdateProject} from "./components/project/UpdateProject";
import {UserProvider} from "./context/UserContext";
import ProtectedRoute from './Routes/ProtectedRoute';

class App extends Component {

    render() {
        return (
            <UserProvider>
                <Router>
                    <Switch>
                        <Route path='/register'
                               render={(props) => <Navbar loggedInUser={false} history={props.history}/>}/>
                        <Route path='/login'
                               render={(props) => <Navbar loggedInUser={false} history={props.history}/>}/>
                        <Route path='/' render={(props) => <Navbar loggedInUser={true} history={props.history}/>}/>
                    </Switch>
                    <Switch>
                        {/*ACCOUNT routes*/}
                        <Route path='/login' component={Login}/>
                        <Route path='/register' component={Register}/>
                        {/*TASK routes*/}
                        <ProtectedRoute path='/task/index' component={TaskList}/>
                        <ProtectedRoute path='/task/new' component={NewTask}/>
                        <ProtectedRoute path='/task/update' component={UpdateTask}/>
                        {/*PROJECT routes*/}
                        <ProtectedRoute path='/project/index' component={ProjectList}/>
                        <ProtectedRoute path='/project/new' component={NewProject}/>
                        <ProtectedRoute path='/project/update' component={UpdateProject}/>
                    </Switch>
                </Router>
            </UserProvider>
        );
    }
}

export default App;



