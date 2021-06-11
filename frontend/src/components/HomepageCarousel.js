import React from 'react'
import Carousel from 'react-elastic-carousel'
import {Paper,Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paper:{
        height: '100px',
        width:"170px",
        borderRadius:"10%",
        
    },
    text:{
        fontFamily: 'Cardo',
        color:"gray",
        margin:'4rem 4rem'
    }
  }));



const breakPoints= [
    {width:1,itemsToShow:1},
    {width:550,itemsToShow:2},
    {width:768,itemsToShow:3},
    {width:1200,itemsToShow:6},
]

const HomepageCarousel = () => {
    const classes = useStyles();
    return (
        <>
         <Typography variant='h5' className={classes.text} >Doctors Helping Blind School</Typography>
         <div className="carousel">
            <Carousel breakPoints={breakPoints} style={{hover:"scale"}}>
                <Paper className={classes.paper} elevavtion={20}><img src="images/doc1.jpg" alt="doctor1"></img></Paper>
                <Paper className={classes.paper} elevavtion={20}><img src="images/doc2.jpg" alt="doctor2"></img>Two</Paper>
                <Paper className={classes.paper} elevavtion={20}><img src="images/doc3.jpg" alt="doctor3"></img>Three</Paper>
                <Paper className={classes.paper} elevavtion={20}><img src="images/doc4.jpg" alt="doctor4"></img>Four</Paper>
                <Paper className={classes.paper} elevavtion={20}><img src="images/doc5.jpg" alt="doctor5"></img>Five</Paper>
                <Paper className={classes.paper}><img src="images/doc6.jpg" alt="doctor6"></img>Six</Paper>
                <Paper className={classes.paper}><img src="images/doc1.jpg" alt="doctor1"></img>Seven</Paper>
                <Paper className={classes.paper}><img src="images/doc2.jpg" alt="doctor2"></img>Eight</Paper>
                <Paper className={classes.paper}><img src="images/doc3.jpg" alt="doctor3"></img>Nine</Paper>
              
            
            
            </Carousel>
         
         </div>   
        </>
    )
}

export default HomepageCarousel
