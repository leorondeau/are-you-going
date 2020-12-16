import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"



export const NavBar = () => {
    const userId = parseInt(localStorage.getItem("ayg__id"))
    return (
        <>
        <nav className="navbar">

            <h3>
                <Link className="nav-links" to="/">Are You Going?</Link>
            </h3>
            <div className="main-nav">

                <li><Link className="nav-links" to={`/profile/${userId}`}>Profile</Link></li>

                <li><Link className="nav-links" to="/">Home</Link></li>

                <li><Link className="nav-links" to="/events">New Event</Link></li>

            </div>
        </nav>
        </>
    )
}
