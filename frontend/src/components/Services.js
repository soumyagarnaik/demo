import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card,Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
     margin: theme.spacing(1),
      width: theme.spacing(25),
      height: theme.spacing(30),
  },
  card:{
   
    width: theme.spacing(20),
    height: theme.spacing(25),
  }
}));

export default function Services() {
  const classes = useStyles();

  return (
    <div className="servicesContainer">
    <div className={classes.root}>

    <Typography variant="h2">Services</Typography>


      <Grid container spacing={3}>
        <Grid item xs={12} >
        
        <Paper className={classes.paper} elevation={3}>
          <Card className={classes.card} style={{'margin':"auto"}} elevation={9}>
            <img src="images/offer.jpg" alt="offer"></img>
            <Typography variant="caption">Grab this offer before end</Typography>
          </Card>
      </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper} elevation={3}>
          <Card className={classes.card} style={{'margin':"auto"}} elevation={9}>
            <img src="images/consult.jpg" alt="consult"></img>
          <Typography variant="caption">Consult Online with your choice</Typography>
        </Card>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper} elevation={3}>
            <Card className={classes.card} style={{'margin':"auto"}} elevation={9}>
            <img src="images/checkup.jpg" alt="checkups"></img>
            <Typography variant="caption">Check Up</Typography>
         </Card>
          
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper} elevation={3}>
            <Card className={classes.card} style={{'margin':"auto"}} elevation={9}>
                <img src="images/reminder.jpg" alt="reminder"></img>
                <Typography variant="caption">Reminder</Typography>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper} elevation={3}>
          <Card className={classes.card} style={{'margin':"auto"}} elevation={9}>
          <img src="images/prescription.jpg" alt="prescription"></img>
          <Typography variant="caption">Prescription</Typography>
      </Card>
          
          </Paper>
        </Grid>
      </Grid>
    </div>
    </div>
  );
}
