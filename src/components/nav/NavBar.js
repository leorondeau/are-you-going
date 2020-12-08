import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => { 
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                {/* If a Link is added there must also be a Route */}
                <Link className="navbar__link" to="/">Are You Going?</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/users">Profile</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/events/create">New Event</Link>
            </li>
        </ul>
    )
}