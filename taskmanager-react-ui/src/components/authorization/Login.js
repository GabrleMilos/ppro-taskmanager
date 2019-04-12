import React, {Component} from 'react';

export class Login extends Component {
    state = {
        isLoading: true
    };


    async componentDidMount() {
        this.setState({isLoading: false});
    }

    render() {
        const {isLoading} = this.state;
        if (isLoading) {
            return (
                <div className="App-intro">
                    <h2>Loading..</h2>
                </div>
            );
        }
        return (
            <div className="App-intro">
                <h2>LOADED</h2>
            </div>
        );
    }
}