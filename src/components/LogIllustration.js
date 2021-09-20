import React from 'react';
import img from '../assets/images/login.svg';
import classes from './styles/Illustration.module.css';
const LogIllustration = () => {
    return (
        <div className={classes.illustration}>
            <img src={img} alt="Login" />
        </div>
    );
};

export default LogIllustration;