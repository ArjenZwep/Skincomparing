import React from 'react';
import useStyles from "../styles"
import Title from "../components/Title";
import Topten from "../components/Topten";

function Datapage() {
    let classes = useStyles();
    return (
        <div className={classes.root}>
            <Title/>
            <p>Hier komt het data stuk</p>
            <Topten/>
        </div>
    );
}

export default Datapage;