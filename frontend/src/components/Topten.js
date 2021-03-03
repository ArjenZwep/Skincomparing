import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Paper, ThemeProvider, Typography } from '@material-ui/core';
import {useSpring, animated} from 'react-spring';

import Datalist from './Datalist'
import useStyles from '../styles';


export default function Topten(props) {
    let classes = useStyles();
    const fade = useSpring({opacity: 1, from: {opacity: 0}})
    let [Rankinglist, setRankingList] = useState({name: [], rank: []});



    // Fetch two championsskins here
    async function getComparison() {
        let res = await axios.get("/topten");
        if (res.status===200){
            setRankingList({name: res.data, rank: res.data});
        } else {
            console.log("Invalid Query");
        }
    }

    // Post the winner back to the backend to be stored in the database
    function postWinner(winner, loser) {
        console.log(winner)
        let res = axios.post(`/skin?winnerId=${winner}&loserId=${loser}`);
    }


    useEffect(() => {
        getComparison()
    }, [])


    return(
        <div className={classes.content}>
            <Grid container justify="center">
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                            <Datalist imgname={Rankinglist.name[0]} name={Rankinglist.rank[0]}/>
                            <br/>
                            <Datalist imgname={Rankinglist.name[1]} name={Rankinglist.rank[1]}/>
                            <br/>
                            <Datalist imgname={Rankinglist.name[2]} name={Rankinglist.rank[2]}/>
                            <br/>
                            <Datalist imgname={Rankinglist.name[3]} name={Rankinglist.rank[3]}/>
                    </Grid>
            </Grid>
        </div>
    )
}