import React, {Component} from 'react';

export class Login extends Component {
    state = {
        email: '',
        password: ''
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.loginUser();

    }

    async loginUser() {
        const responseDetail = await fetch('http://localhost:8080/user/login/' + this.state.email + '/' + this.state.password);
        const userAsyncResponse = await responseDetail.json();
        if (userAsyncResponse) {
            localStorage.setItem('loggedInUser', JSON.stringify(userAsyncResponse));
            this.props.history.push("/task/index");
        }
    }

    componentDidMount() {
        localStorage.removeItem('loggedInUser');
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className="grey-text text-darken-3">Sign in</h5>
                    <div className="input-field">
                        <label htmlFor='email'>Email</label>
                        <input id='email' type='email' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor='password'>Password</label>
                        <input id='password' type='password' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}