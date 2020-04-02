import React from 'react';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
import CustomButton from '../CustomButton';


const useStyles = makeStyles(theme => ({
    root: {
        height: 300,
        width: '80%',
        margin: '30px',
    },
}));

const DeviceCard = (props) => {
    const classes = useStyles();
    const { deviceData, removeFromCompareList } = props;

    return (
        <Paper className={classes.root}>
            <Grid>
                <Grid item xs={10}>
                    <Typography>Device Id: {deviceData.id}</Typography>
                    <Typography>Device Name: {deviceData.name}</Typography>
                    <Typography>Device Type: {deviceData.type}</Typography>
                    <Typography>Device Type: {deviceData.availability}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <CustomButton title="Remove" onClick={() => removeFromCompareList(deviceData.id)} />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default DeviceCard;