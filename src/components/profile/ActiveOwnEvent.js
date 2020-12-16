import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { EventContext }from '../event/EventProvider'


export const ActiveOwnEvent = ({ event }) => {

    
    const { deleteOwnerEvent } = useContext(EventContext)

    
    return (
        <>
        <div>
            <section className="event">
                <ul className="event__name">
                    <Link to={`/events/${event.id}`}>
                        {event.name}
                    </Link>
                </ul>
                
                <div className="event__date">{event.startDate}</div>
                
                <button type="button" onClick={
                    () => {
                            deleteOwnerEvent(event)  
                        }
                    
                }>Remove</button>
            </section>
        </div>
        </>
    )
}