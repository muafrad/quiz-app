import React from 'react';
import LogIllustration from '../LogIllustration';
import LoginForm from '../LoginForm';

const LogIn = () => {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <LogIllustration />
                <LoginForm />
            </div>
        </>
    );
};

export default LogIn;