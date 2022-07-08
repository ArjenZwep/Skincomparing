import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Paper, ThemeProvider, Typography } from '@material-ui/core';
import {useSpring, animated} from 'react-spring';
import { SectionDivider } from '../../styles/GlobalComponents';


import Skin from '../Skin/Skin'
import comparisonStyles from './ComparisonStyles';


export default function Comparison(props) {
    let classes = comparisonStyles();
    const fade = useSpring({opacity: 1, from: {opacity: 0}})
    let [skinOne, setSkinOne] = useState({name: "Hextech Sejuani", imgurl: "https://www.mobafire.com/images/champion/skins/landscape/sejuani-hextech-762x.jpg", id: 0})
    let [skinTwo, setSkinTwo] = useState({name: "Heartseeker Jinx", imgurl: "https://www.mobafire.com/images/champion/skins/landscape/jinx-heartseeker-762x.jpg", id: 0})

    // Fetch two championsskins here
    async function getComparison() {
        let res = await axios.get("/skin");
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
        <SectionDivider />
        <Grid container style={'grid-auto-rows: 1fr'}>
            {/* Some spacing */}
            <Grid item />
            <animated.div style={fade}>
                <Grid>
                    <Paper className={classes.skinCard} onClick={() => refreshSkins(skinOne.id, skinTwo.id)}>
                        <Skin imgname={skinOne.imgurl} name={skinOne.name}/>
                    </Paper>
                </Grid>
            </animated.div>
            {/* Add here some VS logo  */}
            <Grid>
                <div className={classes.versus}>
                    <Typography variant="h4">
                        VS
                    </Typography>
                </div>
            </Grid>

            <Grid>
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