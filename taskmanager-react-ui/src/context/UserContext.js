import React from 'react';

const DEFAULT_STATE = {
    isAuthorized: false,
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    iconText: undefined,
    setIsAuthorized: () => null,
    setUser: () => null,
};

const UserContext = React.createContext(DEFAULT_STATE);

class UserProvider extends React.Component {
    state = DEFAULT_STATE;

    setIsAuthorized = (value) => {
        this.setState({isAuthorized: value})
    };

    setUser = ({firstName, lastName, email}) => {
        this.setState({
            firstName,
            lastName,
            email,
            iconText: firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase()
        })
    };

    render() {
        const {children} = this.props;
        const {isAuthorized, firstName, lastName, email, iconText} = this.state;
        return (
            <UserContext.Provider value={
                {
                    isAuthorized,
                    firstName,
                    lastName,
                    email,
                    iconText,
                    setIsAuthorized: this.setIsAuthorized,
                    setUser: this.setUser,
                }
            }>
                {children}
            </UserContext.Provider>
        );
    };
}

const UserConsumer = ({children}) => {
    return (
        <UserContext.Consumer>
            {children}
        </UserContext.Consumer>
    );
};

export {UserProvider, UserConsumer, UserContext};