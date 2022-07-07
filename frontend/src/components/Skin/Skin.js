import React from 'react'
import skinStyles from './skinStyles'
import { Typography} from '@material-ui/core';


export default function Skin(props) {
    let classes = skinStyles();
    return(
        <div className={classes.skinImg}>
                <div className={classes.skinName}>
                {props.name}
                </div>
            {/* <img src={process.env.PUBLIC_URL + '/'+props.imgname+'.jpg'} width="100%" height="100%"/> */}
             <img src={props.imgname} width="100%" height="100%"/>
        </div>
    )
}