import React from 'react';
import {NavLink} from "react-router-dom";

const LoggedOffLinks = () => {
    return (
        <ul className='right'>
            <li>
                <NavLink to='/login'> Log in </NavLink>
            </li>
            <li>
                <NavLink to='/register'> Register </NavLink>
            </li>
        </ul>
    );
}
export default LoggedOffLinks