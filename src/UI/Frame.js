import React from 'react';
import classes from './Frame.module.css';

const Frame = (props) => {
	return <div className={classes.wrapperFrame}>{props.children}</div>;
};

export default Frame;
