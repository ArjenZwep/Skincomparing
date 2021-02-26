import React from 'react';
import useStyles from "../styles/index"
import { Typography } from '@material-ui/core';
import {NavLink} from "react-router-dom";

export default function Title(props) {
    let classes = useStyles();
    return (
    <div className={classes.appHeader}>
        <Typography variant="h4">
            Skin Comparison
        </Typography>
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/datapage'>Rankinglist</NavLink></li>
            </ul>
        </nav>
    </div>
    );
}