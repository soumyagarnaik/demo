import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import '../css/homepage/homePage2.css'
import { Paper, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    paper: {
       width:"13rem",
       padding:".5rem",
       borderRadius:"7%"
    },
    caption:{
        alignItems:"center",
        width:"70%"
    }

}));

const Homepage2 = () => {

    const classes = useStyles();
    return (
        <>

            <div className="diagonal-box">
                <div className="content">

                    <Grid container spacing={3}>
                        <Grid item xs={6} sm={3}>
                        <div className="paperContainer">
                            <Paper className={classes.paper} elevation={9} >
                                <img src="images/consult1.jpg" alt="Set Profile" ></img>
                            </Paper>
                                <Typography variant="h6">Set profile</Typography> 
                                <Typography  className={classes.caption} variant="caption">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore eniam</Typography>
                           </div> 
                        </Grid>

                        <Grid item xs={6} sm={3}>
                        <div className="paperContainer">
                            <Paper className={classes.paper} elevation={9} >
                                <img src="images/content2.jpg" alt="Set Profile" ></img>
                            </Paper>
                                <Typography variant="h6">Start Consulting</Typography> 
                                <Typography className={classes.caption} variant="caption">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore eniam</Typography>
                           </div> 
                        </Grid>

                        <Grid item xs={6} sm={3}>
                        <div className="paperContainer">
                            <Paper className={classes.paper} elevation={9} >
                                <img src="images/profil1.jpg" alt="Set Profile" ></img>
                            </Paper>
                                <Typography variant="h6">Set profile</Typography> 
                                <Typography className={classes.caption} variant="caption">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore eniam</Typography>
                           </div> 
                        </Grid>

                        <Grid item xs={6} sm={3}>
                        <div className="paperContainer">
                            <Paper className={classes.paper} elevation={9} >
                                <img src="images/consult.jpg" alt="Set Profile" ></img>
                            </Paper>
                                <Typography variant="h6">Prescribe Online</Typography> 
                                <Typography className={classes.caption} variant="caption">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore eniam</Typography>
                           </div> 
                        </Grid>
                        
                    </Grid>
                    
                </div>

            </div>

            
        </>
    )
}

export default Homepage2
