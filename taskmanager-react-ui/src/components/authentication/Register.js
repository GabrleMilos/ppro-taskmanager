import React, {Component} from 'react';
import {UserContext} from "../../context/UserContext";
import {NewProject} from "../project/NewProject";

export class Register extends Component {
    state = {
        email:'',
        password:'',
        firstName:'',
        lastName:''
    };

    componentDidMount() {
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { history } = this.props;
        const {setIsAuthorized, setUser} = this.context;

        fetch('http://localhost:8080/user/register/' + this.state.email + '/' + this.state.password+ '/' + this.state.firstName+ '/' + this.state.lastName)
            .then((res) => res.json())
            .then((userInfo) => {
                setIsAuthorized(true);
                setUser(userInfo);
                history.push('/task/index');
            })
            .catch((e) => console.log(e));
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className="grey-text text-darken-3">Register</h5>
                    <div className="input-field">
                        <label htmlFor='email'>Email</label>
                        <input id='email' type='email' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor='password'>Password</label>
                        <input id='password' type='password' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor='firstName'>First name</label>
                        <input id='firstName' type='text' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor='lastName'>Last Name</label>
                        <input id='lastName' type='text' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Register</button>
                    </div>
                </form>
            </div>
        );
    }
}

Register.contextType = UserContext;