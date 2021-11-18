import React from 'react'
import './navbar.css'
import logo from '../assests/edufu.in.png'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Button from 'react-bootstrap/Button'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarleft">
                <img
                    className="logoimg" 
                    src={logo}
                    alt="edufu.in"
                />
            </div>
            <div className="navbarmiddle">
                <div className="navbartext">
                    Virtual Tour
                </div>
                <div className="navbartext">
                    Blogs
                </div>
                <div className="navbartext">
                    Institutions
                </div>
                <div className="navbartext">
                    Jobs
                </div>
                <div className="navbartext">
                    Profile
                </div>
            </div>
            <div className="navbarright">
                <div className="icons" >
                    <NotificationsNoneIcon className="icon" />
                </div>
                <Button variant="outline-primary">Primary</Button>{' '}
            </div>
            
        </div>
    )
}
