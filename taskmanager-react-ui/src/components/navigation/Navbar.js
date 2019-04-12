import React from 'react';
import {Link} from "react-router-dom";
import LoggedInLinks from './LoggedInLinks'
import LoggedOffLinks from './LoggedOffLinks'

const Navbar = () => {
    return (
        <nav className="grey darken-3">
            <div className="container nav-wrapper">
                <Link to='/' className='brand-logo'> TaskManager </Link>
                <LoggedInLinks/>
                <LoggedOffLinks/>
            </div>
        </nav>
    )
}
export default Navbar