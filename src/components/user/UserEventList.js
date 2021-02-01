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

    // const {usersGoingArray , setUsersGoing } = useState([])
    /* 
    This lists the Events guest list in dropdown of details page. Invokes User function. 
    */
    const eventDetailId = parseInt(props.match.params.eventId)
    const activeUserId = parseInt(localStorage.getItem("ayg__id"))
    useEffect(() => {
        getUsers()
        .then(getEvents)
        .then(getUsersEvents)
        
    }, [])
    
    useEffect(() => {
        
        
    }, [events, usersEvents])
    
    
    const thisEvent = usersEvents.filter(ue => ue.eventId === eventDetailId)

    const usersGoing = thisEvent.map(te => users.find(u => te.userId === u.id))
    console.log("usersGoing", usersGoing)
    // setUsersGoing(usersGoing)



    /* 
    Get all activeusers watch list then map over usersgoing to find overlap. 
    
    */
    if (usersGoing.length === 0) {



        return (
            <>
                <div className="users">
                    <section className="event-list">
                        <h3>Start this party!</h3>

                    </section>
                </div>
            </>
        )

    } else {

        return (
            <>
                <Dropdown className="users-list-dropdown">
                    <Dropdown.Toggle className="event-list user-go-button">Going</Dropdown.Toggle>
                                
                        <Dropdown.Menu>
                            <Dropdown.Item className="user-list-item">
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
