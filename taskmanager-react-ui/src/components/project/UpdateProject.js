import React, {Component} from 'react';
import {UserContext} from "../../context/UserContext";
import M from "materialize-css";

export class UpdateProject extends Component {
    state = {
        projectName: '',
        projectId: ''

    };

    componentDidMount() {
        const {projectId} = this.props.location.state;
        fetch('http://localhost:8080/project/detail/' + projectId).then(response => {
                response.json().then(data => {
                    this.setState({
                        projectId: data.id,
                        projectName: data.name
                    });

                }).catch(function (error) {
                    console.log(error);
                })
            }
        );
        M.AutoInit();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {email} = this.context;
        const {projectId, projectName} = this.state;
        const {history} = this.props;
        fetch('http://localhost:8080/project/update/' + projectId + '/' + projectName + '/' + email).then(response => {
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
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className="grey-text text-darken-3">Update project</h5>
                    <div className="row">
                        <label className='col s2'>Project name</label>
                        <input id='projectName' type='text' onChange={this.handleChange} className='col s4'
                               value={this.state.projectName}/>
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