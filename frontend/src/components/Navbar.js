import React from 'react'
import {Link} from 'react-router-dom'
import '../css/navbar.css'

const Navbar = () => {
    return (
        <>
        <nav>
        <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
         </div>

        <ul className="links flex space-x-6">
           
            <li className="flex flex-col items-center  ">
                <Link className="block bg-white p-.5 rounded-full" to="/profile">
                <img className="h-12 w-12 rounded-full" src="images/profile.png" alt="profile" />
                </Link>
                
              <Link to="/profile">Profile</Link>
            </li>
            <li className="flex flex-col items-center ">
                <Link className="block bg-white p-.5 rounded-full"  to="/setappointments">
                <img className="h-10 w-10 rounded-full" src="images/setappointment.jpg" alt="setppointments"></img>
                </Link>
                
              <Link to="/profile">Set Appointment</Link>
            </li>

            <li className="flex flex-col items-center">
                <Link className="block bg-white p-.5 rounded-full" to="/appointments">
                <img className="h-10 w-10 rounded-full" src="images/appointments.jpg" alt="appointment"></img>
                </Link>
                
              <Link to="/profile">Appointments</Link>
            </li>

            <li className="flex flex-col items-center">
                <Link className="block bg-white p-.5 rounded-full" to="/setting">
                <img className="h-10 w-10 rounded-full" src="images/setting.jpg" alt="setting"></img>
                </Link>
                
              <Link to="/profile">Setting</Link>
            </li>
            </ul>
        </nav>   
        </>
    )
}

export default Navbar
