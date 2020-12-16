import React, { useContext, useState, useEffect } from 'react'
import { UserEventContext } from './UsersEventsProvider'
import {Link } from 'react-router-dom'


export const UserGoEvent = ({ event }) => {
    // {console.log("USER" , user.name)}

    const { usersEvents, getUsersEvents } = useContext(UserEventContext)
    const [userEvent, setUserEvents] = useState({})




    useEffect(() => {
        getUsersEvents()
    }, [])

    // useEffect(() => {

    // }, [])

    return (

        <section className="event">
            <ul className="event__name">
                <Link to={`/events/${event.id}`}>
                    {event.name}
                </Link>
            </ul>
        </section>
    )
}