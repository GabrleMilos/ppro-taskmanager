import React, {Component} from 'react';
import M from "materialize-css";
import {TaskTable} from "./TaskTable";
import {UserContext} from "../../context/UserContext";

export class TaskList extends Component {
    state = {
        tasks: []
    };

    componentDidMount() {
        M.AutoInit();
        const {email} = this.context;

        fetch('http://localhost:8080/task/userTasks/' + email)
            .then(response => {
                response.json().then(data => {
                    this.setState({tasks: data});
                })
            })
            .catch((e) => console.log(e));
        ;
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