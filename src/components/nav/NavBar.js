import React from "react"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav'
import "./NavBar.css"
import { NavDropdown } from "react-bootstrap"



export const NavBar = () => {
    const userId = parseInt(localStorage.getItem("ayg__id"))
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                {/* <Navbar.Brand href="home"></Navbar.Brand> */}
                <h6>
                    <Nav.Link className="nav-links" href="/">Are You Going?</Nav.Link>
                </h6>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" bsPrefix="navbar">

                        {/* <NavDropdown className="nav-group"> */}

                        <Nav.Link className="nav-links" href={`/profile/${userId}`}>Profile</Nav.Link>

                        <Nav.Link className="nav-links" href="/">Home</Nav.Link>

                        <Nav.Link className="nav-links" href="/events">New Event</Nav.Link>
                        {/* </NavDropdown> */}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
