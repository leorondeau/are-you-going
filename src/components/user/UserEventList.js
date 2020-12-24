import React, { useContext, useEffect, useState } from 'react'
import { UserEventContext } from "./UsersEventsProvider"
import { UserContext } from './UserProvider'
import { EventContext } from '../event/EventProvider'
import { User } from './User'
import Dropdown from 'react-bootstrap/Dropdown'


export const UserEventList = (props) => {
    const { usersEvents, getUsersEvents } = useContext(UserEventContext)
    const { users, getUsers } = useContext(UserContext)
    const { events, getEvents, } = useContext(EventContext)


    /* 
    This lists the Events guest list. Should be nameed EventsUserList?
    */
    const eventDetailId = parseInt(props.match.params.eventId)
    const activeUserId = parseInt(localStorage.getItem("ayg__id"))

    useEffect(() => {
        getUsers()
            .then(getEvents)
            .then(getUsersEvents)

    }, [])

    useEffect(() => {

    }, [])

    const thisEvent = usersEvents.filter(ue => ue.eventId === eventDetailId)

    const usersGoing = thisEvent.map(te => users.find(u => te.userId === u.id))



    /* 
    Get all activeusers watch list then map over usersgoing to find overlap. 
    
    */
    if (usersGoing.length === 0) {



        return (
            <>
                <div className="users">
                    <section className="eventList">
                        <h3>There's frickin' pandemic!</h3>

                    </section>
                </div>
            </>
        )

    } else {

        return (
            <>
                <Dropdown className="usersList-dropdown">
                    <Dropdown.Toggle className="eventList event-button user-go-button">Going</Dropdown.Toggle>
                                
                        <Dropdown.Menu>
                            <Dropdown.Item >
                                {
                                    usersGoing.map(ug => (<User key={ug.id} user={ug} />))
                                }
                            </Dropdown.Item>
                        </Dropdown.Menu>
                </Dropdown>
            </>
        )
    }
}
