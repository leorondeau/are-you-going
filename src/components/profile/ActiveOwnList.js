import React, { useEffect, useContext, useState } from 'react'
import { EventContext } from '../event/EventProvider'
import { UserEventContext } from '../user/UsersEventsProvider'
import { ActiveOwnEvent } from './ActiveOwnEvent'



export const ActiveOwnList = (props) => {

    const userId = parseInt(localStorage.getItem("ayg__id"))

    const { usersEvents, getUsersEvents } = useContext(UserEventContext)
    const { events, getEvents, } = useContext(EventContext)
    

    const [event, setEvent] = useState([])
    

    useEffect(() => {
        getEvents()
            .then(getUsersEvents)
            
    }, [])

    // The order of these useEffect calls is crucial
    useEffect(() => {
        const ownEvents = events.filter(e => e.userId === userId) || []
        setEvent(ownEvents)

    }, [events , usersEvents])
 

    /* 
    Map through events and filter all events.userId that matches active usersId.
    That will return all events associated with that user.
    */
    return (
        <>
            <div className="events">
                <ul className="eventList">
                    <h3>Own Events</h3>
                    {
                        event.map(oe => (<ActiveOwnEvent key={oe.id} event={oe}/>))
                    }
                </ul>
            </div>
        </>
    )
}