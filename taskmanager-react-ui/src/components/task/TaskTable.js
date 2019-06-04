import React, {Component} from 'react';
import M from "materialize-css";

export class TaskTable extends Component {
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    edit = (id) => {
        const {history} = this.props;

        history.push({
            pathname: '/task/update/',
            state: {projectId: id}
        });
    }

    detail = (id) => {
        const {history} = this.props;

        history.push({
            pathname: '/task/detail/',
            state: {projectId: id}
        });
    }

    render() {
        const {tasks} = this.props;
        return (
            <table className='striped'>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Created</th>
                    <th>Assigned to</th>
                    <th>Project</th>
                    <th>Priority</th>
                    <th>State</th>
                    <th>Type</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                {tasks && tasks.map(task =>
                    <tr key={task.id}>
                        <td>{task.name}</td>
                        <td>{task.created}</td>
                        <td>{task.assignedUser.email}</td>
                        <td>{task.project.name}</td>
                        <td>{task.priority.name}</td>
                        <td>{task.state.name}</td>
                        <td>{task.type.name}</td>
                        <td>
                            <button className="btn-small gray z-depth-0"
                                    onClick={() => this.detail(task.id)}>Detail
                            </button>
                            <button className="btn-small orange z-depth-0"
                                    onClick={() => this.edit(task.id)}>Edit
                            </button>
                        </td>
                    </tr>
                )}

                </tbody>
            </table>
        );
    }
}