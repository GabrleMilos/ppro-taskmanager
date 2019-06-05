import React, {Component} from 'react';
import M from "materialize-css";
import {UserContext} from "../../context/UserContext";
import {TaskTable} from "../task/TaskTable";

export class ProjectDetails extends Component {
    state = {
        project: [],
        tasks: []
    };

    constructor(props) {
        super(props);
        //IMPLEMENT OTHER JUNK HERE
        this.state = {
            project: null,
            tasks: null
        };
    }

    componentDidMount() {
        M.AutoInit();
        const {projectId} = this.props.location.state;

        fetch('http://localhost:8080/project/detail/' + projectId)
            .then(response => {
                response.json().then(data => {
                    this.setState({project: data});
                })
            })
            .catch((e) => console.log(e));

        fetch('http://localhost:8080/task/tasksForProject/' + projectId)
            .then(response => {
                response.json().then(data => {
                    this.setState({tasks: data});
                })
            })
            .catch((e) => console.log(e));
    }

    render() {
        const {project, tasks} = this.state;
        if (project == null || tasks == null)
            return (<div></div>);
        return (
            <div className="container">
                <h5 className="grey-text text-darken-3">Details of project</h5>

                <div className="divider"></div>
                <div className="row">
                    <label className='col s2'>Project name</label>
                    <p className='col s4'>{project.name}</p>
                </div>
                <div className="row">
                    <label className='col s2'>Created</label>
                    <p className='col s4'>{project.created}</p>
                </div>
                <div className="row">
                    <label className='col s2'>Project manager</label>
                    <p className='col s4'>{project.manager.firstName} {project.manager.lastName}</p>
                </div>


                <div className='divider'></div>
                <label className='col s2'>Project tasks</label>
                <TaskTable tasks={tasks}/>

            </div>
        );
    }

}

ProjectDetails.contextType = UserContext;
