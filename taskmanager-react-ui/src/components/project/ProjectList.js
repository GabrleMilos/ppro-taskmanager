import React, {Component} from 'react';
import {ProjectTable} from './ProjectTable'

export class ProjectList extends Component {
    state = {
        projects: []
    };

    async componentDidMount() {
        fetch('http://localhost:8080/project/myProjects/' + 'abc').then(response => {
                response.json().then(data => {
                    this.setState({projects: data});
                })
            }
        );

        // const userAsyncResponse = await responseDetail.json();
        //
        // if (userAsyncResponse) {
        //     localStorage.setItem('loggedInUser', JSON.stringify(userAsyncResponse));
        //     this.props.history.push("/task/index");
        // }
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