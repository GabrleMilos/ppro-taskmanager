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
        console.log(this.props);
        const tasks =
            [
                {id: 1, name: 'Task1', created: '1991-01-01', assignedTo: 'User1', project: 'project1', priority:'low',state:'new',type:'type'},
                {id: 2, name: 'Task2', created: '1991-01-02', assignedTo: 'User2', project: 'project2', priority:'low',state:'new',type:'type'},
                {id: 3, name: 'Task3', created: '1991-01-03', assignedTo: 'User3', project: 'project3', priority:'low',state:'new',type:'type'},
                {id: 4, name: 'Task4', created: '1991-01-04', assignedTo: 'User4', project: 'project4', priority:'low',state:'new',type:'type'},
                {id: 5, name: 'Task5', created: '1991-01-05', assignedTo: 'User5', project: 'project5', priority:'low',state:'new',type:'type'}

            ]
        return (
            <div className="container">
                <h5 className="grey-text text-darken-3">Tasks</h5>
                <TaskTable tasks={tasks}/>
            </div>
        );
    }
}