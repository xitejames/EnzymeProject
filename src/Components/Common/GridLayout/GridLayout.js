// Third party stuff
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HistoricTab from '../HistoricTab';
import Paper from '@material-ui/core/Paper'
import CustomButton from '../CustomButton'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  item: {
    height: '95%',
    minWidth: '905px'
  }
}));

const GridLayout = () => {
  const classes = useStyles();
  const [expandedHistory, setExpandedHistory] = React.useState(false);

  return (
    <Grid container spacing={4} className={classes.root}>
      <Grid item xs={6} className={classes.item}>
        <Paper style={{height: '100%', width: '100%'}} />
      </Grid>
      <Grid item xs={6} className={classes.item}>
          <Paper style={{height: expandedHistory ? '33%' :'66%', marginBottom: 20}}>
            <CustomButton title="Make history bigger" onClick={()=>{setExpandedHistory(!expandedHistory)}}/>
          </Paper>
          <div style={{height: expandedHistory ? '66%' :'33%'}} >
            <HistoricTab />
          </div>
          
      </Grid>

    </Grid>
  );
}


export default GridLayout;