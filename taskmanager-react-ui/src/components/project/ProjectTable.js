import React, {Component} from "react";
import M from "materialize-css";
import {NavLink} from "react-router-dom";


export class ProjectTable extends Component {
    componentDidMount() {
        // Auto initialize all the things!

        M.AutoInit();
    }

    render() {
        const {projects} = this.props;
        return (
            <div>
                <NavLink to='/project/new' className='btn pink lighten-1 z-depth-0'> New Project </NavLink>
                <table className='striped'>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Created</th>
                        <th>Project manager</th>
                    </tr>
                    </thead>

                    <tbody>
                    {projects && projects.map(project =>
                        <tr key={project.id}>
                            <td>{project.name}</td>
                            <td>{project.created}</td>
                            <td>{project.manager.email}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}
