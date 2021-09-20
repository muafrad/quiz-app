import React from 'react';
import classes from './styles/Form.module.css';

const Form = ({ children, className, ...rest }) => {
    return (
        <form action="#" className={`${classes.form} ${className}`} {...rest}>
            {children}
        </form>
    );
};

export default Form;