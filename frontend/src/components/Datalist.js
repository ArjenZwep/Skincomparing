import React from 'react'
import useStyles from '../styles'
import { Typography} from '@material-ui/core';


export default function Datalist(props) {
    let classes = useStyles();
    return(
        <div className={classes.Datalist}>
            <Typography display="block" className={classes.Datalist} variant={'overline'}>
                {props.number}
            </Typography>
            <Typography display="block" className={classes.Datalist} variant={'overline'}>
                {props.name}
            </Typography>
        </div>
    )
}