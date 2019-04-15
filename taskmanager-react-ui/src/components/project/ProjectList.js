import React, {Component} from 'react';
import {ProjectTable} from './ProjectTable'

export class ProjectList extends Component {
    render() {
        return (
            <div className="container">
                <h5 className="grey-text text-darken-3">Projects</h5>
                <ProjectTable/>
            </div>
        )
    };
}