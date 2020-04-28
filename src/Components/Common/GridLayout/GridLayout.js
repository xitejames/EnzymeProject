// Third party stuff
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HistoricTab from '../HistoricTab';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import CustomButton from '../CustomButton';

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

const renderTest = (dataType) => {
  switch (dataType) {
    case "Tabular":
      return <HistoricTab />;
    default:
      return <Paper style={{ height: '100%' }} />;
  }
}



const GridLayout = () => {
  const classes = useStyles();
  const [expandedHistory, setExpandedHistory] = React.useState(false);
  const [dataType, setDataType] = React.useState("Tabular");

  const handleChange = (event) => {
    setDataType(event.target.value)
  }

  return (
    <Grid container spacing={4} className={classes.root}>
      <Grid item xs={6} className={classes.item}>
        <Paper style={{ height: '100%', width: '100%' }} />
      </Grid>
      <Grid item xs={6} className={classes.item}>
        <Paper style={{ height: expandedHistory ? '33%' : '66%', marginBottom: 20 }}>
          <CustomButton title="Make history bigger" onClick={() => { setExpandedHistory(!expandedHistory) }} />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">DataType</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={dataType}
              onChange={handleChange}
            >
              <MenuItem value={"Tabular"}>Tabular</MenuItem>
              <MenuItem value={"ChartJs"}>ChartJs</MenuItem>
            </Select>
          </FormControl>
        </Paper>
        <div style={{ height: expandedHistory ? '66%' : '33%' }} >
          {renderTest(dataType)}
        </div>

      </Grid>

    </Grid>
  );
}


export default GridLayout;