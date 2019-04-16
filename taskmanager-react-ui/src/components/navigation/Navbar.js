import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {LoggedInLinks} from './LoggedInLinks'
import {LoggedOffLinks} from './LoggedOffLinks'

export class Navbar extends Component {
    render() {

        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        const links = loggedInUser ? <LoggedInLinks/> : <LoggedOffLinks/>;
        return (
            <nav className="grey darken-3">
                <div className="container nav-wrapper">
                    <Link to='/' className='brand-logo'> TaskManager </Link>
                    {links}
                </div>
            </nav>
        )
    }
}
