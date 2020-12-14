import React, { useEffect, useContext } from 'react'
import { EventContext } from '../event/EventProvider'
import { UserContext } from '../user/UserProvider'
import { UserEventContext } from '../user/UsersEventsProvider'





export const ProfileEventList = (props) => {

    const activeUserId = parseInt(localStorage.getItem("ayg__id"))

    const { events, getEvents } = useContext(EventContext)
    const { users, getUsers } = useContext(UserContext)
    const { usersEvents, addUsersEvents, deleteUsersEvent, getUsersEvents } = useContext(UserEventContext)

    useEffect(() => {
        getUsersEvents()
            .then(getEvents)
        // console.log("usersEvents", usersEvents)

    }, [])
    const activeUserEvents = usersEvents.filter(ue => ue.userId === activeUserId)
    console.log("activeUserEvents", activeUserEvents)

    return (
        <>
            <div className="events">
                <article className="eventList">
                    {

                        <div></div>
                    }

                </article>
            </div>
        </>
    )
}
