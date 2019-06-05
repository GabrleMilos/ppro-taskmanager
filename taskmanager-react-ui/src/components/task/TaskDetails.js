import React, {Component} from 'react';
import M from "materialize-css";
import {UserContext} from "../../context/UserContext";
import {TaskHistoryTable} from "../task/TaskHistoryTable";

export class TaskDetails extends Component {
    state = {
        task: [],
        taskHistory: [],
        allStates: [],
        allPriorities: [],
        allTypes: [],
        allUsers: [],
        selectedStateId: '',
        selectedPriorityId: '',
        selectedTypeId: '',
        selectedAssignedUserId: ''
    };

    constructor(props) {
        super(props);
        //IMPLEMENT OTHER JUNK HERE
        this.state = {
            task: null,
            taskHistory: null,
            allStates: null,
            allPriorities: null,
            allTypes: null,
            allUsers: null,
            selectedStateId: null,
            selectedPriorityId: null,
            selectedTypeId: null,
            selectedAssignedUserId: null
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

        fetch('http://localhost:8080/task/getPriorities')
            .then(response => {
                response.json().then(data => {
                    this.setState({allPriorities: data});
                })
            })
            .catch((e) => console.log(e));

        fetch('http://localhost:8080/task/getStates')
            .then(response => {
                response.json().then(data => {
                    this.setState({allStates: data});
                })
            })
            .catch((e) => console.log(e));

        fetch('http://localhost:8080/task/getUsers')
            .then(response => {
                response.json().then(data => {
                    this.setState({allUsers: data});
                })
            })
            .catch((e) => console.log(e));

        fetch('http://localhost:8080/task/getTypes')
            .then(response => {
                response.json().then(data => {
                    this.setState({allTypes: data});
                })
            })
            .catch((e) => console.log(e));
    }

    changeType = (e) => {
        this.setState({selectedTypeId: [e.target.value]});
        console.log(this.state.selectedTypeId);
    }

    changeState = (e) => {
        this.setState({selectedStateId: [e.target.value]});
    }

    changePriority = (e) => {
        this.setState({selectedPriorityId: [e.target.value]});
    }

    changeAssignedUser = (e) => {
        this.setState({selectedAssignedUserId: [e.target.value]});
    }

    handleChange = (e) => {
        const task = {...this.state.task};
        task[e.target.id] = e.target.value;
        this.setState({
            task: task
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {email} = this.context;
        const {history} = this.props;
        const {task, selectedAssignedUserId, selectedPriorityId, selectedStateId, selectedTypeId} = this.state;

        fetch('http://localhost:8080/task/update/' + task.id + '/' + task.name + '/' + task.description + '/' +
            selectedTypeId + '/' + selectedStateId + '/' + selectedPriorityId + '/' + selectedAssignedUserId + '/' +
            email
        ).then(response => {
                response.json().then(data => {
                    this.setState({task: data});
                    fetch('http://localhost:8080/task/history/' + data.id)
                        .then(response => {
                            response.json().then(data => {
                                this.setState({taskHistory: data});
                            })
                        })
                        .catch((e) => console.log(e));
                })
            }
        );
    }

    render() {
        const {task, taskHistory, allStates, allPriorities, allUsers, allTypes} = this.state;
        if (task == null || allStates == null || allPriorities == null || allUsers == null || allTypes == null)
            return (<div></div>);
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className="grey-text text-darken-3">Task details</h5>
                    <div className="divider"></div>

                    <div className="row">
                        <label className='col s2'>Task name</label>
                        <input id='name' type='text' onChange={this.handleChange} className='col s4'
                               value={task.name}/>
                    </div>

                    <div className="row">
                        <label className='col s2'>Created</label>
                        <input id='created' type='text' onChange={this.handleChange} className='col s4'
                               value={task.created}/>
                    </div>

                    <div className="row">
                        <label className='col s2'>Description</label>
                        <input id='description' type='text' onChange={this.handleChange} className='col s4'
                               value={task.description}/>
                    </div>

                    <div className="row">
                        <label className='col s2'>Type</label>
                        <div className='col s4'>
                            <select id='type' className='custom-select-sm' onChange={this.changeType}
                                    value={this.state.task.state.id}>
                                {this.state.allTypes.map(x => (
                                    <option value={x.id} key={x.id}>{x.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <label className='col s2'>State</label>
                        <div className='col s4'>
                            <select id='state' className='custom-select-sm' onChange={this.changeState}
                                    value={this.state.task.state.id}>
                                {this.state.allStates.map(x => (
                                    <option value={x.id} key={x.id}>{x.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <label className='col s2'>Priority</label>
                        <div className='col s4'>
                            <select id='priority' className='custom-select-sm' onChange={this.changePriority}
                                    className='col s4'
                                    value={this.state.task.priority.id}>
                                {this.state.allPriorities.map(x => (
                                    <option value={x.id} key={x.id}>{x.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>


                    <div className="row">
                        <label className='col s2'>Assigned to</label>
                        <div className='col s4'>
                            <select id='assignedUser' className='custom-select-sm' onChange={this.changeAssignedUser}
                                    className='col s4'
                                    value={this.state.task.assignedUser.id}>
                                {this.state.allUsers.map(x => (
                                    <option value={x.id} key={x.id}>{x.email}</option>
                                ))}
                            </select>
                        </div>
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
