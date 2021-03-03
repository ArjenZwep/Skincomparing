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
    async function getList() {
        let res = await axios.get("/topten");
        if (res.status===200){
            setRankingList({name: res.data["names"], rank: res.data["scores"]})
        } else {
            console.log("Invalid Query");
        }
    }

    console.log(Rankinglist.rank)

    useEffect(() => {
        getList()
    }, [])


    return(
        <div className={classes.content}>
            <Grid container justify="center">
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                            <Datalist name={Rankinglist.name[0]} number={Rankinglist.rank[0]}/>
                            <br/>
                            <Datalist name={Rankinglist.name[1]} number={Rankinglist.rank[1]}/>
                            <br/>
                            <Datalist name={Rankinglist.name[2]} number={Rankinglist.rank[2]}/>
                            <br/>
                            <Datalist name={Rankinglist.name[3]} number={Rankinglist.rank[3]}/>
                    </Grid>
            </Grid>
        </div>
    )
}