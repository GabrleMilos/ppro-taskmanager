import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export class LoggedOffLinks extends Component {
    render() {
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
}