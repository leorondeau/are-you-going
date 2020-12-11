import React from 'react'
import { Link } from 'react-router-dom'



export const Event = ({ event , user} ) => (

        <section className="event">
            <h3 className="event__name">
                <Link to={`/events/${event.id}`}>
                    {event.name}
                </Link>
            </h3>
            <div className="event__location">{event.location}</div>
            <div className="event__date">{event.startDate}</div>
            <div className="event__details">{event.details}</div>
            <div className="event__creator">b: {user.name}</div>
            
            
            <button type="button" class="btn btn-info">Yes</button>
        </section>
    
)