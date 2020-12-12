import React, { useState, useEffect, useContext } from 'react'
import { EventContext } from './EventProvider'
import { UserContext } from '../user/UserProvider'



export const EventDetail = (props) => {
    const { events, getEvents, getEventById } = useContext(EventContext)
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

    // Dependency array. This will render after getEvents
    useEffect(() => {
        const thisEvent = events.find(e => e.id === eventDetailId) || {}
        setSelectedEvent(thisEvent)
        const thisEventOwner = users.find(u => u.id === selectedEvent.userId) || {}
        setEventOwner(thisEventOwner)
    }, [events, users])




    return (
        <>
            <article>
                <section className="event">
                    <h3 className="event__name">{selectedEvent.name}</h3>
                    <h2 className="event__location">{selectedEvent.location}</h2>
                    <div className="event__date">{selectedEvent.startDate}</div>
                    <div className="event__details">{selectedEvent.details}</div>
                    <div className="event__creator"> by: {eventOwner.name}</div>
                </section>
            </article>
        </>
    )

}
