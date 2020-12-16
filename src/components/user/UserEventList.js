import React, { useContext, useEffect, useState } from 'react'
import { UserEventContext } from "./UsersEventsProvider"
import { UserContext } from './UserProvider'
import { EventContext } from '../event/EventProvider'
import { User } from './User'

export const UserEventList = (props) => {
    const { usersEvents, getUsersEvents } = useContext(UserEventContext)
    const { users, getUsers } = useContext(UserContext)
    const { events, getEvents, } = useContext(EventContext)

    /* 
    This lists the Events guest list. Should be nameed EventsUserList?
    */
    const eventDetailId = parseInt(props.match.params.eventId)


    useEffect(() => {
        getUsers()
            .then(getEvents)
            .then(getUsersEvents)
    }, [])

    useEffect(() => {
        
    }, [])

    const thisEvent = usersEvents.filter(ue => ue.eventId === eventDetailId)

    const usersGoing = thisEvent.map(te => users.find(u => te.userId === u.id))


    if (usersGoing.length === 0) {
        return <div className="users">Start this party!</div>
    }
    else {

        return (
            <>
                <div className="users">
                    <section className="eventList">
                        <h3></h3>
                        {
                            usersGoing.map(ug => (<User key={ug.id} user={ug} />))
                        }
                    </section>
                </div>
            </>
        )
    }

}