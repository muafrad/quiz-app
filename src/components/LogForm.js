import React from 'react';
import classes from './styles/Form.module.css';

const LogForm = ({ children, className, ...rest }) => {
    return (
        <form action="#" className={`${className} ${classes.form}`}>
            {children}
        </form>
    );
};

export default LogForm;