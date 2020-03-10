import React from 'react';
import useStyles from "../styles/index"
import { Typography } from '@material-ui/core';

export default function Title(props) {
    let classes = useStyles();
    return (
    <div className={classes.appHeader}>
        <Typography variant="h4">
            Skin Comparison
        </Typography>
    </div>)
}