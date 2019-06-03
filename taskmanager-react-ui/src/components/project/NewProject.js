import React, {Component} from 'react';
import {UserContext} from "../../context/UserContext";
import {ProjectList} from "./ProjectList";

export class NewProject extends Component {
    state = {
        projectName:''
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { history } = this.props;
        const {email} = this.context;
        fetch('http://localhost:8080/project/newProject/' + this.state.projectName + '/' + email).then(response => {
                response.json().then(data => {
                    history.push('/project/index');
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
                        <button className="btn pink lighten-1 z-depth-0">Add project</button>
                    </div>
                </form>
            </div>
        );
    }
}

NewProject.contextType = UserContext;