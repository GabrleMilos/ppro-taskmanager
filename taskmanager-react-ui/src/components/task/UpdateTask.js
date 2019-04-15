import React, {Component} from 'react';
import M from "materialize-css";

export class UpdateTask extends Component {
    state = {
        taskName: '',
        taskDescription: '',
        assignedUser: '',
        taskState: '',
        taskAssignedUser: '',
        projectId: '',
        priorityId: '',
        users: [{id: 1, name: "User 1"}, {id: 2, name: "User 2"}],
        states: [{id: 1, name: "New"}, {id: 2, name: "In development"}, {id: 3, name: "Finished"}],
        priorities: [{id: 1, name: "Immediate"}, {id: 2, name: "Normal"}, {id: 3, name: "Low"}]
    };
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className="grey-text text-darken-3">Update task</h5>
                    <div className="input-field">
                        <label htmlFor='taskName'>Task name</label>
                        <input id='taskName' type='text' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor='taskDescription'>Task description</label>
                        <input id='taskDescription' type='text' onChange={this.handleChange}/>
                    </div>


                    <div className="input-field">
                        <select id='taskAssignedUser' onChange={this.handleChange}>
                            <option value="-1">Select user</option>
                            {this.state.users.map(user => (
                                <option value={user.id} key={user.id}>{user.name}</option>
                            ))}
                        </select>
                        <label>Assigned user</label>
                    </div>

                    <div className="input-field">
                        <select id='taskState' onChange={this.handleChange}>
                            <option value="-1">Select state</option>
                            {this.state.states.map(state => (
                                <option value={state.id} key={state.id}>{state.name}</option>
                            ))}
                        </select>
                        <label>Task state</label>
                    </div>

                    <div className="input-field">
                        <select id='taskPriority' onChange={this.handleChange}>
                            <option value="-1">Select priority</option>
                            {this.state.priorities.map(priority => (
                                <option value={priority.id} key={priority.id}>{priority.name}</option>
                            ))}
                        </select>
                        <label>Task state</label>
                    </div>


                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Update task</button>
                    </div>
                </form>
            </div>
        );
    }
}