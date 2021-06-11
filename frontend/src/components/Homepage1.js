import React from 'react'
import '../css/DoctorNavbar.css'
import {Typography} from '@material-ui/core'

const Homepage1 = () => {
    return (
        <>
        <diV className="quarter"></diV>
        <div className="content-1">
        <div className="content1-container">
          <Typography className="title" variant="h3" >A dcotor is a superhero <br/> in everybody's life in one <br/>or the other moement.</Typography>
          <img  className="image1" src="images/content1.png" alt="head"></img>
        </div>
        <div className="btn-holder">
        <button className="btn-1">SIgn Up</button>
        <button  className="btn-2">Locate</button>
        </div>
     </div>   
        </>
    )
}

export default Homepage1
