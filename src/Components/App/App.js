// Third party stuff
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TimeToLeave from '@material-ui/icons/TimeToLeave';
import GridLayout from '../Common/GridLayout'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '98vh'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#FF4500"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <TimeToLeave />
          <Typography variant="h6" style={{marginLeft: 30}} noWrap>
            Car Journey Service
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <GridLayout />
      </main>
    </div>
  );
}


export default App;