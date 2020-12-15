import React, { useContext, useEffect, useState } from 'react'
import { UserEventContext } from "./UsersEventsProvider"
import { UserContext } from './UserProvider'
import { EventContext } from '../event/EventProvider'
import { User } from './User'

export const UserEventList = (props) => {
    const { usersEvents, getUsersEvents } = useContext(UserEventContext)
    const { users, getUsers } = useContext(UserContext)
    const { events, getEvents, } = useContext(EventContext)

    
    // const [selectedEvent, setSelectedEvent] = useState({})
    const eventDetailId = parseInt(props.match.params.eventId)
   

    useEffect(() => {
        getUsers()
            .then(getEvents)
            .then(getUsersEvents)
    }, [])

    useEffect(() => {
        //    console.log("thisEvent" , thisEvent)
    }, [])

    const thisEvent = usersEvents.filter(ue => ue.eventId === eventDetailId)
    
    const usersGoing = thisEvent.map(te => users.find(u => te.userId === u.id))
    

    return (
        <>
            <div className="users">
                <section className="eventList">
                    {
                        usersGoing.map(ug => (<User key={ug.id} user={ug} />))
                        
                    }
                </section>
            </div>
        </>
    )
}

