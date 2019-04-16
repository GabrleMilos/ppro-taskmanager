import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export class LoggedInLinks extends Component {
    render() {
        console.log('props from logged in links');
        console.log(this.props);
        return (
            <ul className='right'>
                <li>
                    <NavLink to='/task/new'> New Task </NavLink>
                </li>
                <li>
                    <NavLink to='/project/new'> New Project </NavLink>
                </li>
                <li>
                    <NavLink to='/project/index'> Projects </NavLink>
                </li>
                <li>
                    <NavLink to='/task/index'> Tasks </NavLink>
                </li>
                <li>
                    <a onClick={this.handleLogOut}> Log out </a>
                </li>
                <li>
                    <NavLink to='/' className="btn btn-floating pink lighten-1"> NN</NavLink>
                </li>
            </ul>
        );
    }

    handleLogOut = (e) => {
        localStorage.removeItem('loggedInUser');
        this.props.history.push("/task/index");
    }
}

