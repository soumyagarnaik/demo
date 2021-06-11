import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'space-evenly',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(25),
      height: theme.spacing(16),
    },
  },
  text:{
    display: "flex",
    alignContent:'center',
    justifyContent:'flex-start',
    padding:'30px 10px'

  }
}));

const User=()=> {
  const classes = useStyles();

  return (
    <>
    <div className="userContainer">
    <Typography variant="h2" className={classes.text} >hi user</Typography>
    <Typography variant="h5" style={{'padding':'10px'}} >Here are todays<br/>recomended actions for you</Typography>
    <div className={classes.root}>
    <Paper elevation={9} >
        <Typography style={{'margin-top':'20px' ,'padding':'10px','text-align':'center'}}>Lets Book An Appointment</Typography>
    </Paper>
    <Paper  elevation={2}>
        <Typography style={{'margin-top':'20px' ,'padding':'10px','text-align':'center','opacity':'0.2'}}>Upcoming Appointment</Typography>
    </Paper>
    <Paper elevation={2} >
        <Typography style={{'margin-top':'20px' ,'padding':'10px','text-align':'center','opacity':'0.2'}}>Reports and Delivery</Typography>
    </Paper>
  </div>
  </div>
    </>
    
  );
}

export default User