import React, { useEffect, useContext, useState } from 'react'
import { EventContext } from '../event/EventProvider'
import { UserEventContext } from '../user/UsersEventsProvider'
import { UserGoEvent } from './UserGoEvent'


/* Invokes UserGoEvent and lists all events that that user is attending on their personal profile
that can be seen by anyone visiting their page */

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
            return events.find(eve => uge.eventId === eve.id)
        }) || {}
        setEventName(eventNames)

    }, [events, usersEvents])

    return (
        <>
            <div className="events">
                <article className="user-eventList">
                    <h6 className="user-go-header">Attend</h6>
                    <div>

                        {
                            eventName.map(en => <UserGoEvent key={en.id} event={en} />)

                        }
                    </div>
                </article>
            </div>
        </>
    )
}