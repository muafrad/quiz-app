import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Form from '../Form';
import LogIllustration from '../LogIllustration';
import classes from '../styles/LogIn.module.css';
import TextInput from '../TextInput';

const LogIn = () => {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <LogIllustration />
                <Form className={classes.login}>
                    <TextInput type="text" placeholder="Enter email address" icon="alternate_email" />
                    <TextInput type="password" placeholder="Enter password" icon="lock" />
                    <Button>SUBMIT NOW</Button>
                    <div class="info">
                        Don't have an account?
                        <Link to="/signup"> Signup</Link> instead.
                    </div>
                </Form>
            </div>
        </>
    );
};

export default LogIn;