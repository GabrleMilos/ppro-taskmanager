import React, {Component} from 'react';
import M from "materialize-css";

export class TaskTable extends Component {
    state = {};

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    render() {
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


                </tbody>
            </table>
        );
    }
}