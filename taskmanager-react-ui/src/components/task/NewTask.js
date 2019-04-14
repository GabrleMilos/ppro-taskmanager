import React, {Component} from 'react';

export class NewTask extends Component {
    state = {
        taskName: '',
        taskDescription:'',
        assignedUser:'',
        users: [{id: 1, name: "User 1"}, {id: 2, name: "User 2"}]
    };
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
                    <h5 className="grey-text text-darken-3">Add task</h5>
                    <div className="input-field">
                        <label htmlFor='taskName'>Task name</label>
                        <input id='taskName' type='text' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor='taskDescription'>Task description</label>
                        <input id='taskDescription' type='text' onChange={this.handleChange}/>
                    </div>


                    <div className="input-field">
                        <select id='taskAssignedUser'>
                            <option value="-1">Assign to user</option>
                            {this.state.users.map(user => (
                                <option value={user.id} key={user.id}>{user.name}</option>
                            ))}
                        </select>
                    </div>


                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Add task to project</button>
                    </div>
                </form>
            </div>
        );
    }
}