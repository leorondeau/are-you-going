import React, { useEffect, useContext, useState } from 'react'
import { EventContext } from '../event/EventProvider'
import { UserEventContext } from '../user/UsersEventsProvider'
import { UserGoEvent } from './UserGoEvent'




export const UserGoEventList = (props) => {

    const user = parseInt(props.match.params.userId)
    

    const { events, getEvents } = useContext(EventContext)
    const { usersEvents, getUsersEvents } = useContext(UserEventContext)

    const [selectedEvent, setSelectedEvent] = useState([])
    const [eventName, setEventName] = useState([])

    useEffect(() => {

        getEvents()
            .then(getUsersEvents)

    }, [])


    useEffect(() => {
        const usersGoEvents = usersEvents.filter(ue => ue.userId === user) || {}
        setSelectedEvent(usersGoEvents)

        const eventNames = usersGoEvents.map(uge => {
            return events.find(eve => uge.eventId === eve.id)}) || {}
        setEventName(eventNames)

    }, [events , usersEvents ])

    return (
        <>
            <div className="events">
                <article className="eventList">
                    <h2>Attend List</h2>
                    {
                        eventName.map(en => <ul><UserGoEvent key={en.id} event={en}  /></ul> )
                        
                    }
                </article>
            </div>
        </>
    )
}