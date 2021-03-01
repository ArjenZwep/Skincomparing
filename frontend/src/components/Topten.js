import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Paper, ThemeProvider, Typography } from '@material-ui/core';
import {useSpring, animated} from 'react-spring';

import Skin from './Skin'
import useStyles from '../styles';


export default function Topten(props) {
    let classes = useStyles();
    const fade = useSpring({opacity: 1, from: {opacity: 0}})
    let [Rankinglist, setRankingList] = useState({"Name": [], "Rank": []});



    // Fetch two championsskins here
    async function getComparison() {
        let res = await axios.get("/topten");
        if (res.status===200){
            setSkinOne({name: res.data["skin1name"], imgurl: res.data["skin1img"], id: res.data["skin1id"]})
            setSkinTwo({name: res.data["skin2name"], imgurl: res.data["skin2img"], id: res.data["skin2id"]});
        } else {
            console.log("Invalid Query");
        }
    }

    // Post the winner back to the backend to be stored in the database
    function postWinner(winner, loser) {
        console.log(winner)
        let res = axios.post(`/skin?winnerId=${winner}&loserId=${loser}`);
    }

    function refreshSkins(winner, loser){
        postWinner(winner, loser);
        getComparison();
    }

    useEffect(() => {
        getComparison()
    }, [])


    return(
        <div className={classes.content}>
            <Grid container justify="center">
                {/* Some spacing */}
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                <animated.div style={fade}>
                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                        <Paper className={classes.skinCard} onClick={() => refreshSkins(skinOne.id, skinTwo.id)}>
                            <Skin imgname={skinOne.imgurl} name={skinOne.name}/>
                        </Paper>
                    </Grid>
                </animated.div>
                {/* Add here some VS logo  */}
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                    <div className={classes.versus}>
                        <Typography variant="h4">
                            VS
                        </Typography>
                    </div>
                </Grid>

                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Paper className={classes.skinCard} onClick={() => refreshSkins(skinTwo.id, skinOne.id)}>
                        <Skin imgname={skinTwo.imgurl} name={skinTwo.name}/>
                    </Paper>
                </Grid>
                {/* Some spacing */}
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
            </Grid>
        </div>
    )
}