import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Paper, ThemeProvider, Typography } from '@material-ui/core';

import Skin from './Skin'
import useStyles from '../styles';


export default function Comparison(props) {
    let classes = useStyles();

    let [skinOne, setSkinOne] = useState({name: "Hextech Sejuani", imgurl: "pskin1"})
    let [skinTwo, setSkinTwo] = useState({name: "Heartseeker Jinx", imgurl: "pskin2"})


    // Fetch two championsskins here
    async function getComparison() {
        let res = await axios.get("/api/skin");
        if (res.status===200){
            console.log(res.data);
            console.log("Niet gelukt")
        } else {
            console.log("Invalid Query");
        }     
        console.log("Niet gelukt?")
    }

    // Post the winner back to the backend to be stored in the database
    function postWinner() {

    }

    useEffect(() => {
        getComparison()
    }, [])


    return(
    <div className={classes.content}>
        <Grid container justify="center">
            {/* Some spacing */}
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/> 
            
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <Paper className={classes.skinCard} onClick={() => console.log("Clicked "+ skinOne.name)}>
                    <Skin imgname={skinOne.imgurl} name={skinOne.name}/>
                </Paper>
            </Grid>
            {/* Add here some VS logo  */}
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                <div className={classes.versus}>
                    <Typography variant="h4">
                        VS
                    </Typography>
                </div>
            </Grid>

            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <Paper className={classes.skinCard} onClick={() => console.log("Clicked "+skinTwo.name)}>
                    <Skin imgname={skinTwo.imgurl} name={skinTwo.name}/>
                </Paper>
            </Grid>
            {/* Some spacing */}
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
        </Grid>
    </div>
    )
}