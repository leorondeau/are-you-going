import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import Dropdown from 'react-bootstrap/Dropdown'


export const NavBar = (props) => {
    const userId = parseInt(localStorage.getItem("ayg__id"))
    return (
        <>
            <h3>
                <Link className="navbar__link" to="/">Are You Going?</Link>
            </h3>
            <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                    Menu
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item>
                        <Link className="navbar__link" to="/">Home</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link className="navbar__link" to={`/profile/${userId}`}>Profile</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link className="navbar__link" to="/events">New Event</Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}




// {/* <u className="navbar"></u>
//             <li className="navbar__item active">
//                 {/* If a Link is added there must also be a Route */}
//                 <Link className="navbar__link" to="/">Are You Going?</Link>
//             </li>
//             <li className="navbar__item">
//                 <Link className="navbar__link" to="/users">Profile</Link>
//             </li>
//             <li className="navbar__item">
//                 <Link className="navbar__link" to="/events">New Event</Link>
//             </li>
//         </ul> */}