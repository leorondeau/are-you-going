import React from "react"
import Navbar from "react-bootstrap/Navbar"
// import { Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav'
import "./NavBar.css"




export const NavBar = () => {
    const userId = parseInt(localStorage.getItem("ayg__id"))
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top">
                {/* <Navbar.Brand href="home"></Navbar.Brand> */}
                <h6>
                    <Nav.Link className="nav-links app-title" href="/">AYG</Nav.Link>
                </h6>
                <Navbar.Toggle bsPrefix="nav-toggle" aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" bsPrefix="navbar">

                        {/* <NavDropdown className="nav-group"> */}
                        <div className="navbar-group">

                            <Nav.Link bsPrefix="nav-links nav-titles" href={`/profile/${userId}`}>Profile</Nav.Link>

                            <Nav.Link bsPrefix="nav-links nav-titles" href="/">Home</Nav.Link>

                            <Nav.Link bsPrefix="nav-links nav-titles" href="/events">New Event</Nav.Link>
                        </div>
                        {/* </NavDropdown> */}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
