import React, {Component} from "react";
import M from "materialize-css";


export class ProjectTable extends Component {
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
                    <th>Project manager</th>
                </tr>
                </thead>

                <tbody>

                </tbody>
            </table>
        );
    }
}