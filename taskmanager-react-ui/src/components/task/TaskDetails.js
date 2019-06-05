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


    handleChange = (e) => {
        const task = {...this.state.task};
        console.log(e.target.id);
        console.log(task);
        console.log(task[e.target.id]);
        task[e.target.id] = e.target.value;
        this.setState({
            task: task
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {email} = this.context;
        const {projectId, projectName} = this.state;
        const {history} = this.props;
        fetch('http://localhost:8080/task/update/' + projectId + '/' + projectName + '/' + email).then(response => {
                response.json().then(data => {
                    if(data === true){
                        history.push({pathname: '/project/index',
                        });
                    }
                })
            }
        );
    }

    render() {
        const {task, taskHistory} = this.state;
        if (task == null)
            return (<div></div>);
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className="grey-text text-darken-3">Task details</h5>
                    <div className="divider"></div>

                    <div className="input-field">
                        <label htmlFor='name'>Task name</label>
                        <input id='name' type='text' onChange={this.handleChange}
                               value={task.name}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor='created'>Created</label>
                        <input id='created' type='text' onChange={this.handleChange}
                               value={task.created} />
                    </div>

                    <div className="input-field">
                        <label htmlFor='description'>Description</label>
                        <input id='description' type='text' onChange={this.handleChange}
                               value={task.description}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor='state'>State</label>
                        <input id='state' type='text' onChange={this.handleChange}
                               value={task.state.name}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor='priority'>Priority</label>
                        <input id='priority' type='text' onChange={this.handleChange}
                               value={task.priority.name}/>
                    </div>


                    <div className="input-field">
                        <label htmlFor='assignedUser'>Assigned to</label>
                        <input id='assignedUser' type='text' onChange={this.handleChange}
                               value={task.assignedUser.email}/>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Update task</button>
                    </div>
                </form>


                <h5 className="grey-text text-darken-3">Task history</h5>
                <div className="divider"></div>
                <TaskHistoryTable taskHistory={taskHistory}/>
            </div>

        );
    }

}

TaskDetails.contextType = UserContext;
