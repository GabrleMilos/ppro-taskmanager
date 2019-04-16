import React from 'react';
import {NavLink} from "react-router-dom";

const LoggedInLinks = () => {

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
                <NavLink to='/'> Log out </NavLink>
            </li>
            <li>
                <NavLink to='/' className="btn btn-floating pink lighten-1"> NN</NavLink>
            </li>
        </ul>
    );

}
export default LoggedInLinks