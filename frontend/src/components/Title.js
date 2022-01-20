import React from 'react';
import useStyles from "../styles/index"
import { Typography } from '@material-ui/core';
import {NavLink} from "react-router-dom";

export default function Title(props) {
    let classes = useStyles();
    return (
    <div className="flex-col shadow-sm border-b-1 sticky top-0 min-h-2 z-50 bg-third shadow-lg flex-row flex-auto">
        <h1 className="text-center font-bold text-2xl">
            Skin Comparison
        </h1>
    </div>
    );
}