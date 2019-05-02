import React, {Component} from 'react';
import M from "materialize-css";
import {TaskTable} from "./TaskTable";

export class TaskList extends Component {
    state = {
        tasks:[]
    };

    async componentDidMount() {
        await fetch('http://localhost:8080/task/userTasks/' + 'dave@thecofeemaker.com').then(response => {
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