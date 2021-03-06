import React from 'react';
import img from '../assets/images/3.jpg';
import classes from './styles/MiniPlayer.module.css';

const MiniPlayer = () => {
    return (
        <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
            <span className={`material-icons-outlined open ${classes.open}`}> play_circle_filled </span>
            <span className={`material-icons-outlined open ${classes.close}`}> close </span>
            <img src={img} alt="Media Player" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    );
};

export default MiniPlayer;