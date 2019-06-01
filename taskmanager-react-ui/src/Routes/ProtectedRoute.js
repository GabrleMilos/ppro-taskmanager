
import React from 'react';
import { UserConsumer } from '../context/UserContext';
import { Route, Redirect } from 'react-router';

const ProtectedRoute = ({ exact, path, component: Component }) => {
    return (
        <UserConsumer>
            {
                ({ isAuthorized }) => <Route render={
                    (props) => isAuthorized ? (
                        <Component { ...props } />
                    ) : (
                        <Redirect to={{ pathname: '/login' }} />
                    )
                }/>
            }
        </UserConsumer>
    );
};

export default ProtectedRoute;