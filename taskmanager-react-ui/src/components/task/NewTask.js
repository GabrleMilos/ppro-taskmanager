import React, {Component} from 'react';
import M from "materialize-css";
import {UserContext} from "../../context/UserContext";

export class NewTask extends Component {
    state = {
        task: [],

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

            allStates: null,
            allPriorities: null,
            allTypes: null,
            allUsers: null,

            selectedStateId: 1,
            selectedPriorityId: 1,
            selectedTypeId: 1,
            selectedAssignedUserId: 1
        };
    }

    componentDidMount(e) {
        M.AutoInit();
        const {projectId} = this.props.location.state;

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
        const {projectId} = this.props.location.state;
        const {email} = this.context;
        const {history} = this.props;
        const {task, selectedAssignedUserId, selectedPriorityId, selectedStateId, selectedTypeId} = this.state;

        fetch('http://localhost:8080/task/new/' + task.name + '/' + task.description + '/' +
            selectedTypeId + '/' + selectedStateId + '/' + selectedPriorityId + '/' + selectedAssignedUserId + '/' +
            projectId + '/' + email
        ).then(response => {
                response.json().then(data => {
                    if (data === true) {

                        history.push('/project/index')
                    } else {
                        M.toast({html: 'Only the manager can add a task to project!', classes: 'red-text darken-3 white'})
                    }
                })
            }
        );
    }

    render() {

        const {allStates, allPriorities, allUsers, allTypes} = this.state;
        if (allStates == null || allPriorities == null || allUsers == null || allTypes == null)
            return (<div></div>);

        console.log(this.state);
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className="grey-text text-darken-3">Task details</h5>
                    <div className="divider"></div>

                    <div className="row">
                        <label className='col s2'>Task name</label>
                        <input id='name' type='text' onChange={this.handleChange} className='col s4'/>
                    </div>

                    <div className="row">
                        <label className='col s2'>Description</label>
                        <input id='description' type='text' onChange={this.handleChange} className='col s4'/>
                    </div>

                    <div className="row">
                        <label className='col s2'>Type</label>
                        <div className='col s4'>
                            <select id='type' className='browser-default' onChange={this.changeType}
                                    value={this.state.selectedTypeId}>
                                {allTypes.map(x => (
                                    <option value={x.id} key={x.id}>{x.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <label className='col s2'>State</label>
                        <div className='col s4'>
                            <select id='state' className='browser-default' onChange={this.changeState}
                                    value={this.state.selectedStateId}>
                                {allStates.map(x => (
                                    <option value={x.id} key={x.id}>{x.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <label className='col s2'>Priority</label>
                        <div className='col s4'>
                            <select id='priority' className='browser-default' onChange={this.changePriority}
                                    value={this.state.selectedPriorityId}>
                                {allPriorities.map(x => (
                                    <option value={x.id} key={x.id}>{x.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>


                    <div className="row">
                        <label className='col s2'>Assigned to</label>
                        <div className='col s4'>
                            <select id='assignedUser' className='browser-default' onChange={this.changeAssignedUser}
                                    value={this.state.selectedAssignedUserId}>
                                {allUsers.map(x => (
                                    <option value={x.id} key={x.id}>{x.email}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create task</button>
                    </div>
                </form>
            </div>

        );
    }

}

NewTask.contextType = UserContext;
