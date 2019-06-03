import React, {Component} from "react";
import M from "materialize-css";
import {NavLink} from "react-router-dom";


export class ProjectTable extends Component {
    componentDidMount() {
        // Auto initialize all the things!

        M.AutoInit();
    }

    edit = (id) => {
        const {history} = this.props;

        history.push({pathname: '/project/update/',
            state: { projectId: id }
        });
    }
    delete = (id) => {
    }

    render() {
        const {projects} = this.props;
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
                            <td>{project.name}</td>
                            <td>{project.created}</td>
                            <td>{project.manager.email}</td>
                            <td>
                                <button className="btn-small orange z-depth-0"
                                        onClick={() => this.edit(project.id)}>Edit
                                </button>
                                <button className="btn-small red z-depth-0"
                                        onClick={() => this.delete(project.id)}> Delete
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
