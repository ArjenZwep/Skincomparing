import React from 'react';
import useStyles from "../styles"
import Title from "../components/Title";

function Datapage() {
    let classes = useStyles();
    return (
        <div className={classes.root}>
            <Title/>
            <p>Hier komt het data stuk</p>
        </div>
    );
}

export default Datapage;