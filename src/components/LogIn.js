import React from 'react';
import Button from './Button';
import LogForm from './LogForm';
import LogIllustration from './LogIllustration';
import classes from './styles/LogIn.module.css';
import TextInput from './TextInput';

const LogIn = () => {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <LogIllustration />
                <LogForm className={classes.login}>
                    <TextInput type="text" placeholder="Enter email address" icon="alternate_email" />
                    <TextInput type="password" placeholder="Enter password" icon="lock" />
                    <Button>SUBMIT NOW</Button>
                    <div class="info">
                        Don't have an account?
                        <a href="signup.html"> Signup</a>
                        instead.</div>
                </LogForm>
            </div>
        </>
    );
};

export default LogIn;