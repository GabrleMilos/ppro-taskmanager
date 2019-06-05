import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navbar} from "./components/navigation/Navbar";
import {Login} from "./components/authentication/Login";
import {Register} from "./components/authentication/Register";
import {ProjectList} from "./components/project/ProjectList"
import {TaskList} from "./components/task/TaskList"
import {NewTask} from "./components/task/NewTask";
import {TaskDetails} from "./components/task/TaskDetails";
import {NewProject} from "./components/project/NewProject";
import {UpdateProject} from "./components/project/UpdateProject";
import {UserProvider} from "./context/UserContext";
import ProtectedRoute from './Routes/ProtectedRoute';
import {ProjectDetails} from "./components/project/ProjectDetails";

class App extends Component {

    render() {
        return (
            <UserProvider>
                <Router>
                    <Route path='/' render={(props) => <Navbar  {...props}/>}/>
                    <Switch>
                        {/*ACCOUNT routes*/}
                        <Route path='/login' component={Login} {...this.props}/>
                        <Route path='/register' component={Register} {...this.props}/>
                        {/*TASK routes*/}
                        <ProtectedRoute path='/task/index' component={TaskList} {...this.props}/>
                        <ProtectedRoute path='/task/new' component={NewTask} {...this.props}/>
                        <ProtectedRoute path='/task/detail' component={TaskDetails} {...this.props}/>
                        {/*PROJECT routes*/}
                        <ProtectedRoute path='/project/index' component={ProjectList} {...this.props}/>
                        <ProtectedRoute path='/project/new' component={NewProject} {...this.props}/>
                        <ProtectedRoute path='/project/update' component={UpdateProject} {...this.props}/>
                        <ProtectedRoute path='/project/detail' component={ProjectDetails} {...this.props}/>
                    </Switch>
                </Router>
            </UserProvider>
        );
    }
}

export default App;



