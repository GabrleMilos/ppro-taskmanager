import React, {Component} from 'react';
import M from "materialize-css";

export class TaskTable extends Component {
    state = {};

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
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
                </tr>
                </thead>

                <tbody>
                {tasks && tasks.map(task =>
                    <tr key={task.id}>
                        <td>{task.name}</td>
                        <td>{task.created}</td>
                        <td>{task.assignedTo}</td>
                        <td>{task.project}</td>
                        <td>{task.priority}</td>
                        <td>{task.state}</td>
                        <td>{task.type}</td>
                    </tr>
                )}

                </tbody>
            </table>
        );
    }
}