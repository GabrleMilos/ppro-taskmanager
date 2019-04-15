import React, {Component} from 'react';
import M from "materialize-css";
import {TaskTable} from "./TaskTable";

export class TaskList extends Component {
    state = {};

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    render() {
        return (
            <div className="container">
                <h5 className="grey-text text-darken-3">Tasks</h5>
                <TaskTable/>
            </div>
        );
    }
}