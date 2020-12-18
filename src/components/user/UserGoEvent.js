import React from 'react'
import {Link } from 'react-router-dom'


export const UserGoEvent = ({ event }) => {


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