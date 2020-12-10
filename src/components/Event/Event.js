import React from 'react'
import { Link } from 'react-router-dom'

export const Event = ({ event }) => (
    <div>
        <section className="event">
            <h3 className="event__name">
                <Link to={`/events/${event.id}`}>
                    {event.name}
                </Link>
            </h3>
            <div className="event__location">{event.location}</div>
            <div className="event__date">{event.startDate}</div>
            <div className="event__details">{event.details}</div>
        </section>
    </div>
)