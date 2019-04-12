import React from 'react';
import {NavLink} from "react-router-dom";

const LoggedInLinks = () => {

    return (
        <ul className='right'>
            <li>
                <NavLink to='/projects'> Projects </NavLink>
            </li>
            <li>
                <NavLink to='/tasks'> Tasks </NavLink>
            </li>
            <li>
                <NavLink> Log out </NavLink>
            </li>
            <li>
                <NavLink className="btn btn-floating pink lighten-1"> NN</NavLink>
            </li>
        </ul>
    );

}
export default LoggedInLinks