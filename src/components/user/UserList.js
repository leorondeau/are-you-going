import React, { useContext, useEffect, useState } from 'react'
import { UserEventContext } from "./UsersEventsProvider"
import { UserContext } from './UserProvider'
import { EventContext } from '../event/EventProvider'
import { User } from './User'

export const UserList = (props) => {
    const { usersEvents, getUsersEvents } = useContext(UserEventContext)
    const { users, getUsers } = useContext(UserContext)
    const { events, getEvents, getEventById } = useContext(EventContext)

    // const [selectedEvent, setSelectedEvent] = useState({})
    const eventDetailId = parseInt(props.match.params.eventId)
    // console.log("selectedEvent" , selectedEvent)
    // console.log("eventDetailId" , eventDetailId)

    useEffect(() => {
        getUsers()
            .then(getEvents)
            .then(getUsersEvents)
    }, [])

    useEffect(() => {
        //    console.log("thisEvent" , thisEvent)
    }, [])

    const thisEvent = usersEvents.filter(ue => ue.eventId === eventDetailId)
    console.log("thisEvent", thisEvent)
    const usersGoing = thisEvent.map(te => users.find(u => te.userId === u.id))
    console.log("usersGoing", usersGoing)

    //     // console.log("events" , events)
    //     // console.log("users" , users)
    //     // console.log("usersEvents" , usersEvents)
    //     // console.log("props in UserList" , props.match.params.eventId)
    // console.log("User" , User)
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

