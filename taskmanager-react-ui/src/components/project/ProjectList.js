import React, {Component} from 'react';
import {ProjectTable} from './ProjectTable'

export class ProjectList extends Component {
    render() {
        const projects =
            [
                {id: 1, name: 'Proejct1', created: '1991-01-01', manager: 'abc1'},
                {id: 2, name: 'Proejct2', created: '1992-02-02', manager: 'abc2'},
                {id: 3, name: 'Proejct3', created: '1993-03-03',manager:'abc3'},
            ]
        ;
        return (
            <div className="container">
                <h5 className="grey-text text-darken-3">Projects</h5>
                <ProjectTable projects={projects}/>
            </div>
        )
    };
}