import React, {Component} from "react";
import M from "materialize-css";
import {NavLink} from "react-router-dom";


export class ProjectTable extends Component {
    state = {
        projects:[{}]
    }
    constructor(props){
        super(props);
        this.state = {
            projects:[props.projects]
        };
    }
    componentDidMount() {
        // Auto initialize all the things!
        const {projects} = this.props;
        console.log('projects from props');
        console.log(projects);

        this.setState({projects: projects})
        console.log('projects from state');
        console.log(this.state);
        M.AutoInit();
    }

    edit = (id) => {
        const {history} = this.props;

        history.push({
            pathname: '/project/update/',
            state: {projectId: id}
        });
    }
    deleteFromState = (id) => {
        let state = this.state;
        let remainingProjects = [...state.projects.filter(project => project.id !== id)];
        state.projects = remainingProjects;
        this.setState({ state });
    }
    delete = (id) => {
        fetch('http://localhost:8080/project/delete/' + id).then(response => {
                response.json().then(data => {
                    if (data === true) {
                        this.deleteFromState(id);
                    }
                }).catch(function (error) {
                    console.log(error);
                })
            }
        );
    }

    render() {
        const {projects} = this.state;
        return (
            <div>
                <NavLink to='/project/new' className='btn-small green lighten-1 z-depth-0'> New Project </NavLink>
                <table className='striped'>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Created</th>
                        <th>Project manager</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {projects && projects.map(project =>
                        <tr key={project.id}>
                            <td>{project.name} {project.id}</td>
                            <td>{project.created}</td>
                            <td>{project.manager.email}</td>
                            <td>
                                <button className="btn-small orange z-depth-0"
                                        onClick={() => this.edit(project.id)}>Edit
                                </button>
                                <button className="btn-small red z-depth-0"
                                        onClick={() => {
                                            if (window.confirm('Are you sure you wish to delete this item?')) this.delete(project.id)
                                        }}> Delete
                                </button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}
