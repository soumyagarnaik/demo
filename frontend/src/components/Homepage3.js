import React from 'react'
import { Typography } from '@material-ui/core'
import '../css/homepage/homePage3.css'


const Homepage3 = () => {

    return (
        <>
            <div className="container3">
                <div className="part1">
                    <img src="images/school.jpg" alt="school"></img>
                    <div className="text-holder">
                        <div className="first">
                            <Typography className="text1" variant="h3">What is Blind School ?</Typography>
                            <Typography className="text2" variant="h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi r</Typography>
                        </div>
                        <div className="second">
                            <Typography className="text1" variant="h3">What is our missions ?</Typography>
                            <Typography className="text2" variant="h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi r</Typography>
                        </div>
                    </div>
                </div>
                

            </div>
        </>
    )
}

export default Homepage3
