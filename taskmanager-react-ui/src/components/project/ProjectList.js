import React, {Component} from 'react';
import {ProjectTable} from './ProjectTable'
import {UserContext} from "../../context/UserContext";
import {TaskList} from "../task/TaskList";
import M from "materialize-css";

export class ProjectList extends Component {
    state = {
        projects: []
    };

    componentDidMount() {
        M.AutoInit();
        const {email} = this.context;

        fetch('http://localhost:8080/project/myProjects/' + email)
            .then(response => {
                response.json().then(data => {
                    this.setState({projects: data});
                })
            })
            .catch((e) => console.log(e));
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

TaskList.contextType = UserContext;