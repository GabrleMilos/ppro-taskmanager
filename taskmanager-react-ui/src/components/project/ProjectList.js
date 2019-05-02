import React, {Component} from 'react';
import {ProjectTable} from './ProjectTable'

export class ProjectList extends Component {
    state = {
        projects: []
    };

    async componentDidMount() {
        fetch('http://localhost:8080/project/myProjects/' + 'john@thecofeebringer.com').then(response => {
                response.json().then(data => {
                    this.setState({projects: data});
                })
            }
        );
    }


    render() {
        const {projects} = this.state;

        return (
            <div className="container">
                <h5 className="grey-text text-darken-3">Projects</h5>
                <ProjectTable projects={projects}/>
            </div>
        )
    }
    ;
}