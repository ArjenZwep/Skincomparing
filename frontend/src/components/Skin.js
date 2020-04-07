import React from 'react'
import useStyles from '../styles'
import { Typography} from '@material-ui/core';


export default function Skin(props) {
    let classes = useStyles();
    return(
        <div className={classes.skinImg}>
            <Typography display="block" className={classes.cta} variant={'overline'}>
                {props.name}
            </Typography>
            {/* <img src={process.env.PUBLIC_URL + '/'+props.imgname+'.jpg'} width="100%" height="100%"/> */}
            <img src={'https://www.mobafire.com/images/champion/skins/portrait/reksai-blackfrost.jpg'} width="100%" height="100%"/>
        </div>
    )
}