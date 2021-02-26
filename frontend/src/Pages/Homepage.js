import useStyles from "../styles";
import Title from "../components/Title";
import Comparison from "../components/Comparison";
import React from "react";

function Homepage() {
    let classes = useStyles();
    return (
        <div className={classes.root}>
            <Title/>
            <Comparison/>
        </div>
    );
}

export default Homepage;
