import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import "./NavBar.css"


/* Navbar styled useing bootstrap-react. Imports may be necessary to run */

export const NavBar = () => {
    const userId = parseInt(localStorage.getItem("ayg__id"))
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top">
                <h6>
                    <Nav.Link className="nav-links app-title" href="/">AYG</Nav.Link>
                </h6>
                {/* <Navbar.Toggle bsPrefix="nav-toggle" aria-controls="responsive-navbar-nav">Menu</Navbar.Toggle> */}
                {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
                    <Nav className="mr-auto" bsPrefix="navbar">
                        <div className="navbar-group">

                            <Nav.Link bsPrefix="nav-links nav-titles" href={`/profile/${userId}`}>Profile</Nav.Link>

                            <Nav.Link bsPrefix="nav-links nav-titles" href="/">Home</Nav.Link>

                            <Nav.Link bsPrefix="nav-links nav-titles" href="/events">New Event</Nav.Link>
                        </div>
                    </Nav>
                {/* </Navbar.Collapse> */}
            </Navbar>
        </>
    )
}




