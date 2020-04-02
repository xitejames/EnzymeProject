import React from 'react';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles(theme => ({
    root: {
        height: 300,
        width: '80%',
        margin: '30px',
    },
}));

const DeviceCard = (props) => {
    const classes = useStyles();
    const { deviceData } = props;

    return (
        <Paper className={classes.root}>
            <Typography>Device Id: {deviceData.id}</Typography>
            <Typography>Device Name: {deviceData.name}</Typography>
            <Typography>Device Type: {deviceData.type}</Typography>
            <Typography>Device Type: {deviceData.availability}</Typography>
        </Paper>
    );
}

export default DeviceCard;