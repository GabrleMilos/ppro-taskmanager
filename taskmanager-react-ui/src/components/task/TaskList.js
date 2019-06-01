import React, {Component} from 'react';
import M from "materialize-css";
import {TaskTable} from "./TaskTable";
import {UserContext} from "../../context/UserContext";
import {LoggedInLinks} from "../navigation/LoggedInLinks";

export class TaskList extends Component {
    state = {
        tasks:[]
    };

    async componentDidMount() {
        const {email} = this.context;
        // mozne pridat >>>>>, { mode: 'no-cors' }<<<< za + email           *
        await fetch('http://localhost:8080/task/getUserTasks/' + email).then(response => {
                response.json().then(data => {
                    this.setState({tasks: data});
                })
            }
        );
        M.AutoInit();
    }

    render() {
        const {tasks} = this.state;
        return (
            <div className="container">
                <h5 className="grey-text text-darken-3">Tasks</h5>
                <TaskTable tasks={tasks}/>
            </div>
        );
    }
}

TaskList.contextType = UserContext;