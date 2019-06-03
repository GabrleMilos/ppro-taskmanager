import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {UserConsumer, UserContext} from "../../context/UserContext";

export class LoggedInLinks extends Component {
    render() {
        return (
            <ul className='right'>
                <li>
                    <NavLink to='/task/index'> Tasks </NavLink>
                </li>
                <li>
                    <NavLink to='/project/index'> Projects </NavLink>
                </li>
                <li>
                    <a onClick={this.handleLogOut}> Log out </a>
                </li>
                <li>
                    <UserConsumer>
                        {
                            ({iconText}) => (
                                <button className="btn btn-floating pink lighten-1">
                                    {iconText}
                                </button>
                            )
                        }
                    </UserConsumer>
                </li>
            </ul>
        );
    }

    handleLogOut = (e) => {
        const {setIsAuthorized} = this.context;
        setIsAuthorized(false);
        this.props.history.push("/login");
    }
}
LoggedInLinks.contextType = UserContext;
