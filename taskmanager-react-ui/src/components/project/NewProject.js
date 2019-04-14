import React, {Component} from 'react';

export class NewProject extends Component {
    state = {
        projectName:''
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className="grey-text text-darken-3">Add project</h5>
                    <div className="input-field">
                        <label htmlFor='projectName'>Project name</label>
                        <input id='projectName' type='text' onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Add project</button>
                    </div>
                </form>
            </div>
        );
    }
}