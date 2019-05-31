import React from 'react';

const DEFAULT_STATE = {
    isAuthorized: false,
    username: undefined,
    email: undefined,
    iconText: undefined,
    setIsAuthorized: () => null,
    setUser: () => null,
};

const UserContext = React.createContext(DEFAULT_STATE);

class UserProvider extends React.Component {
    state = DEFAULT_STATE;

    setIsAuthorized = (value) => {
        this.setState({ isAuthorized: value })
    };

    setUser = ({ username, email, iconText }) => {
        this.setState({ username, email, iconText })
    };

    render() {
        const { children } = this.props;
        const { isAuthorized, username, email, iconText } = this.state;
        return(
            <UserContext.Provider value={
                {
                    isAuthorized,
                    username,
                    email,
                    iconText,
                    setIsAuthorized:this.setIsAuthorized,
                    setUser: this.setUser,
                }
            }>
                { children }
            </UserContext.Provider>
        );
    };
}

const UserConsumer = ({ children }) => {
    return (
        <UserContext.Consumer>
            { children }
        </UserContext.Consumer>
    );
};

export { UserProvider, UserConsumer, UserContext };