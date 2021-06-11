import React from 'react'
import {Paper,Typography,Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    position:'relative'
  },
  paper:{
    height: '60vh',
    width:'25%',
    margin:'auto',
    position: 'relative',
    top:'20px',
    display: 'flex',
  },
  button:{
    display:'flex',
    position: 'absolute',
    bottom:'0px',
    left:'70px'
  },
  textContainer:{
    width:'100%',
    height:'70%',
    
    padding:'20px'
  }
}));

const DoctorFrontScreen = () => {
  const classes = useStyles()
  return (
    <div >
      <Paper className={classes.paper} elevation={9}>
          <div className={classes.textContainer}>
          <Typography variant="h4" >Please take your part</Typography>
          </div>
          

         <div className={classes.button}>
         <Button variant="contained" color="primary" style={{margin:'0 10px',width:'80px'}}>
         Register
       </Button>
       <Button variant="contained" color="secondary" style={{margin:'0 10px',width:'80px'}}>
         Login
       </Button>
         </div>
      </Paper>
    </div>
  )
}

export default DoctorFrontScreen
