import React, {Component} from 'react';
import './Navigation.css';
import {Link} from "react-router-dom";

export class Navigation extends Component {
    render() {

        return (
                <nav className="nav-collapse">
                    <ul className="tabs primary-nav">
                        <li className="tabs__item">
                            <Link to="/login" className="tabs__link">Login</Link>
                        </li>
                    </ul>
                </nav>
        );
    }


}