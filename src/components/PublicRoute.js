import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

const PublicRoute = ({ children, ...rest }) => {
    const { currentUser } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                !currentUser ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PublicRoute;