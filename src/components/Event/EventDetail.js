import React, { useState, useEffect, useContext } from 'react'
import { EventContext } from './EventProvider'
import { UserContext } from '../user/UserProvider'
import { Link } from 'react-router-dom'


/* 

EventDetail is called in application views when Event name Link is clicked on main
page and renders an event card with details added and guestlist link

*/

export const EventDetail = (props) => {
    const activeUserId = parseInt(localStorage.getItem("ayg__id"))

    const { events, getEvents, updateEvent } = useContext(EventContext)
    const { users, getUsers } = useContext(UserContext)
    
    const [selectedEvent, setSelectedEvent] = useState({})
    const [eventOwner, setEventOwner] = useState({})
    // console.log("props", props)
    const eventDetailId = parseInt(props.match.params.eventId)
    
    
    useEffect(() => {
        getEvents()
            .then(getUsers)
    }, [])

    // Because above array is empty only run once.

useEffect(() => {
    const thisEvent = events.find(e => e.id === eventDetailId) || {}
    setSelectedEvent(thisEvent)
    const thisEventOwner = users.find(u => u.id === selectedEvent.userId) || {}
    setEventOwner(thisEventOwner)
}, [events, users])
/* 
When events or users array is updated useEffect will run the block. 
Dependency array 
*/


/* 
If this conditional true (active user has selected) then EventDetail will render
the edit button that runs updateEvent when clicked.
*/
    if (activeUserId === selectedEvent.userId ) {
    
    return (
        
        <>
            
            <article>
                <section className="event">
                    <h3 className="event__name">{selectedEvent.name}</h3>
                    <h2 className="event__location">{selectedEvent.location}</h2>
                    <div className="event__date">{selectedEvent.startDate}</div>
                    <div className="event__details">{selectedEvent.details}</div>
                    <div className="event__creator"> by: {eventOwner.name}</div>
                    <Link to= {`/events/${eventDetailId}/users`}>
                        Event Goers
                    </Link>
                </section>
                <button onClick={
                () => {
                // updateEvent(props.match.params.eventId)
                // .then(() => {
                props.history.push(`/events/edit/${selectedEvent.id}`)
            // })
        }
        }>Edit</button>
            </article>
        </>
    ) 
} else {
    return (
        
    <>
        
        <article>
            <section className="event">
                <h3 className="event__name">{selectedEvent.name}</h3>
                <h2 className="event__location">{selectedEvent.location}</h2>
                <div className="event__date">{selectedEvent.startDate}</div>
                <div className="event__details">{selectedEvent.details}</div>
                <div className="event__creator"> by: {eventOwner.name}</div>
                <Link to= {`/events/${eventDetailId}/users`}>
                    Event Goers
                </Link>
            </section>
            
        </article>
    </>
) 

}
    
}