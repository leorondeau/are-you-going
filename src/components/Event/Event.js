import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserEventContext } from '../user/UsersEventsProvider'



export const Event = ({ event, user ,props }) => {
    const userId = parseInt(localStorage.getItem("ayg__id"))

    const { usersEvents, addUsersEvents, deleteUsersEvent, getUsersEvents } = useContext(UserEventContext)
    const [usersEvent, setUsersEvents] = useState({})
    
    

    useEffect(() => {
        getUsersEvents()
    }, [])

    // const going = selectedUserEvent && userId === selectedUserEvent.userId
    // console.log("seletedUserEvent" , selectedUserEvent)
    return (
        <div>
            <section className="event">
                <h3 className="event__name">
                    <Link to={`/events/${event.id}`}>
                        {event.name}
                    </Link>
                </h3>
                <div className="event__location">{event.location}</div>
                <div className="event__date">{event.startDate}</div>
                <div className="event__creator">by: {user.name}</div>
                <button type="button" onClick={
                    () => {

                        const selectedUserEvent = usersEvents.find(ue => ue.eventId === event.id)
                        
                        if (selectedUserEvent && userId === selectedUserEvent.userId) {
                            deleteUsersEvent(selectedUserEvent.id)

                        }
                        else {
                            addUsersEvents({
                                eventId: event.id,
                                userId,

                            })
                        }
                        
                    }
                    
                }>yes</button>
            </section>
        </div>
    )
}