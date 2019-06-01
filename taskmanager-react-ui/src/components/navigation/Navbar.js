import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {LoggedInLinks} from './LoggedInLinks'
import {LoggedOffLinks} from './LoggedOffLinks'
import {UserConsumer} from "../../context/UserContext";

export class Navbar extends Component {
    render() {
        return (
            <nav className="grey darken-3">
                <div className="container nav-wrapper">
                    <Link to='/' className='brand-logo'> TaskManager </Link>

                    <UserConsumer>
                        {
                            ({isAuthorized}) => {
                                console.log(isAuthorized);
                                if (isAuthorized == true) {
                                    return <LoggedInLinks history={this.props.history}/>
                                } else {
                                    return <LoggedOffLinks/>
                                }
                            }
                        }
                    </UserConsumer>
                </div>
            </nav>
        )
    }
}
