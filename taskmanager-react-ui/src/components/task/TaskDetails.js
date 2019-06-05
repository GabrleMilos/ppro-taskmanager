import React, {Component} from 'react';
import M from "materialize-css";
import {UserContext} from "../../context/UserContext";
import {TaskTable} from "../task/TaskTable";

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
                    this.setState({tasks: data});
                })
            })
            .catch((e) => console.log(e));
    }

    render() {
        const {task, taskHistory} = this.state;
        console.log(task);
        console.log(taskHistory);
        if (task == null || taskHistory == null)
            return (<div></div>);
        return (
            <div className="container">
                <h5 className="grey-text text-darken-3">Task details</h5>

                <div className="divider"></div>
                <div className="row">
                    <label className='col s2'>Task name</label>
                    <p className='col s4'>{task.name}</p>
                </div>

                <div className="row">
                    <label className='col s2'></label>
                    <p className='col s4'></p>
                </div>

                <div className="row">
                    <label className='col s2'></label>
                    <p className='col s4'></p>
                </div>

                <div className="row">
                    <label className='col s2'>Created</label>
                    <p className='col s4'>{task.created}</p>
                </div>
            </div>
        );
    }

}

TaskDetails.contextType = UserContext;
