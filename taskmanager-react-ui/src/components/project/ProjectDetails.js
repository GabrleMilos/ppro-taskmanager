import React, {Component} from 'react';
import M from "materialize-css";
import {UserContext} from "../../context/UserContext";
import {TaskTable} from "../task/TaskTable";
import {NavLink} from "react-router-dom";

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

    addTaskToProject = (id) => {
        const {history} = this.props;

        history.push({
            pathname: '/task/new/',
            state: {projectId: id}
        });
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


                <h5 className='col s2'>Project tasks</h5>
                <div className='divider'></div>
                <button className="btn-small green z-depth-0" onClick={() => {this.addTaskToProject(project.id)}}>
                    Create new task in project
                </button>
                <TaskTable tasks={tasks}{...this.props}/>
            </div>
        );
    }

}

ProjectDetails.contextType = UserContext;
