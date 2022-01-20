import React from 'react';
import useStyles from "../styles"
import Title from "../components/Title";
import Topten from "../components/Topten";
import SideBar from '../components/Sidebar';

function Datapage() {
    let classes = useStyles();
    return (
        <div className={classes.root}>
            <SideBar />
            <Title/>
            <p>Hier komt het data stuk</p>
            <Topten/>
        </div>
    );
}

export default Datapage;