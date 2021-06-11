import React from 'react'
import {Link} from 'react-router-dom'

import '../css/DoctorNavbar.css'

const DoctorNavbar = () => {
    return (
        <>
            
            <div >
                
                <div className="navbar"  >
                    <span style={{fontSize:"1.8rem",display:"flex"}}><i className="fas fa-blind" ></i>The Blind <br/> School</span>
                    <nav  >
                        
                        <div className="hamburger">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                        <ul class="navlinks" >
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Profile</Link></li>
                            <li><Link to="/">Consult</Link></li>
                            <li><Link to="/">Shop</Link></li>
                            <li><Link to="/doctors/login"><button>Login</button></Link></li>
                           

                        </ul>
                        
                    </nav>
                </div>
                    
                
            </div>
        </>
    )
}

export default DoctorNavbar
