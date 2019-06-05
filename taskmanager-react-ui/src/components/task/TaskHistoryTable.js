import React, {Component} from 'react';
import M from "materialize-css";

export class TaskHistoryTable extends Component {
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    render() {
        const {taskHistory} = this.props;
        return (
            <table className='striped'>
                <thead>
                <tr>
                    <th>Text</th>
                    <th>Updated</th>
                    <th>By user</th>
                </tr>
                </thead>

                <tbody>
                {taskHistory && taskHistory.map(taskHistory =>
                    <tr key={taskHistory.id}>
                        <td>{taskHistory.text}</td>
                        <td>{taskHistory.updated}</td>
                        <td>{taskHistory.user.firstName} {taskHistory.user.lastName}</td>
                    </tr>
                )}

                </tbody>
            </table>
        );
    }
}