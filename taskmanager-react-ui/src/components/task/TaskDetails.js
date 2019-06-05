import React, {Component} from 'react';
import M from "materialize-css";
import {UserContext} from "../../context/UserContext";
import {TaskHistoryTable} from "../task/TaskHistoryTable";

export class TaskDetails extends Component {
    state = {
        task: [],
        taskHistory: []
    };

    constructor(props) {
        super(props);
        //IMPLEMENT OTHER JUNK HERE
        this.state = {
            task: null,
            taskHistory: null
        };
    }

    componentDidMount() {
        M.AutoInit();
        const {taskId} = this.props.location.state;

        fetch('http://localhost:8080/task/detail/' + taskId)
            .then(response => {
                response.json().then(data => {
                    this.setState({task: data});
                })
            })
            .catch((e) => console.log(e));

        fetch('http://localhost:8080/task/history/' + taskId)
            .then(response => {
                response.json().then(data => {
                    this.setState({taskHistory: data});
                })
            })
            .catch((e) => console.log(e));
    }

    render() {
        const {task, taskHistory} = this.state;
        if (task == null)
            return (<div></div>);
        return (
            <div className="container">
                <h5 className="grey-text text-darken-3">Task details</h5>

                <div className="divider"></div>
                <div className="row">
                    <label className='col s2'>Task name</label>
                    <p className='col s4'>{task.name} {task.id}</p>
                </div>

                <div className="row">
                    <label className='col s2'>Description</label>
                    <p className='col s4'>{task.description}</p>
                </div>

                <div className="row">
                    <label className='col s2'>Task state</label>
                    <p className='col s4'>{task.state.name}</p>
                </div>

                <div className="row">
                    <label className='col s2'>Task priority</label>
                    <p className='col s4'>{task.priority.name}</p>
                </div>

                <div className="row">
                    <label className='col s2'>Created</label>
                    <p className='col s4'>{task.created}</p>
                </div>

                <div className="row">
                    <label className='col s2'>Assigned to</label>
                    <p className='col s4'>{task.assignedUser.firstName} {task.assignedUser.lastName}</p>
                </div>

                <div className="divider"></div>
                <h5 className="grey-text text-darken-3">Task history</h5>
                <TaskHistoryTable taskHistory={taskHistory}/>
            </div>

        );
    }

}

TaskDetails.contextType = UserContext;
