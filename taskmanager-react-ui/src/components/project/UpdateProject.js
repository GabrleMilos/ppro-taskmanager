import React, {Component} from 'react';
import {UserContext} from "../../context/UserContext";

export class UpdateProject extends Component {
    state = {
        projectName: '',
        projectId: ''

    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {email} = this.context;
        fetch('http://localhost:8080/project/update/' + this.state.projectName + '/' + email).then(response => {
                response.json().then(data => {

                })
            }
        );
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className="grey-text text-darken-3">Add project</h5>
                    <div className="input-field">
                        <label htmlFor='projectName'>Project name</label>
                        <input id='projectName' type='text' onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Update project</button>
                    </div>
                </form>
            </div>
        );
    }
}

UpdateProject.contextType = UserContext;