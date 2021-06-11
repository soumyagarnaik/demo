import React from 'react'
import {Button, Typography} from '@material-ui/core'
import '../css/homepage/homePage4.css'

const Homepage4 = () => {
    return (
        <>
            <div className="part3">
                <Typography className="text" variant="h6">Manage Your Clinic Easily</Typography>
                <button>Explore More</button>
            </div>

            <div className="part2">
                <div className="text">
                    <Typography variant="h3">Download Blind School App <br/>for doctors</Typography>
                </div>

                <button className="one" type="button"><i class="fab fa-apple"></i>App Store</button>
                <button className="two"><i class="fab fa-google-play"></i>Google Play</button>
                
                <div>
                    <img  className="img1" src="images/mob1.png" alt="app1"></img>

                    <img  className="img2" src="images/mob2.png" alt="app2"></img>
                </div>

                
            </div>
        </>
    )
}

export default Homepage4
