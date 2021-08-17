import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import "./NavBar.css"


/* Navbar styled useing bootstrap-react. Imports may be necessary to run */

export const NavBar = () => {
    const userId = parseInt(localStorage.getItem("ayg__token"))
    console.log('userId', userId)
    return (
        <>
                <h6>
                    <Nav.Link className="nav-links app-title" href="/">AYG</Nav.Link>
                </h6>
    
                    <Nav className="nav-menu" bsPrefix="navbar">
                        

                            <Nav.Link bsPrefix="nav-links nav-titles" href={`/profile/${userId}`}>Profile</Nav.Link>

                            <Nav.Link bsPrefix="nav-links nav-titles" href="/">Home</Nav.Link>

                            <Nav.Link bsPrefix="nav-links nav-titles" href="/events">New Event</Nav.Link>
                        
                    </Nav>
               
        </>
    )
}




