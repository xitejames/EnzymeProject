import React from 'react';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
import CustomButton from '../CustomButton';
//TEST
import fromSrc from '../../../dummyPdf.pdf';

// https://stackoverflow.com/questions/2104608/hiding-the-toolbars-surrounding-an-embedded-pdf
const useStyles = makeStyles(theme => ({
    root: {
        height: '80%',
        width: '80%',
        margin: '30px',
    },
}));

const DeviceCard = (props) => {
    const classes = useStyles();
    const { deviceData, removeFromCompareList } = props;
    const fromUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&scrollbar=0"
    return (
        <Paper className={classes.root}>
            <Grid container>
                <Grid item xs={8}>
                    <Typography>Device Id: {deviceData.id}</Typography>
                    <Typography>Device Name: {deviceData.name}</Typography>
                    <Typography>Device Type: {deviceData.type}</Typography>
                    <Typography>Device Type: {deviceData.availability}</Typography>
                </Grid>
                <Grid item xs={4} style={{ width: '100%', height: '100%' }}>
                    <CustomButton title="Remove" onClick={() => removeFromCompareList(deviceData.id)} />
                </Grid>
            </Grid>
            {/*Just tested too see if the 'toolbar=0 works with a file from src and it does*/}
            <div style={{ width: '100%', height: '100%' }}>
                <object style={{ width: '100%', height: '100%' }} data={`${fromSrc}#toolbar=0`} type="application/pdf">
                    <embed src={`${fromSrc}#toolbar=0`} type="application/pdf" />
                </object>
            </div>
        </Paper>
    );
}

export default DeviceCard;