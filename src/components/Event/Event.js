import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserEventContext } from '../user/UsersEventsProvider'
// import { WatchListContext } from '../watch/WatchProvider'
// import { UserContext} from '../user/UserProvider'

/* 

Event renders the individual Event card on main. It has a button that allows users to 
add themeselves to an event and remove. It is invoked in EventList.js

*/

export const Event = ({ event, user }) => {
    const userId = parseInt(localStorage.getItem("ayg__id"))

    const { usersEvents, addUsersEvents, deleteUsersEvent, getUsersEvents } = useContext(UserEventContext)
    // const { watch, getWatch } = useContext(WatchListContext)
    // const { users, getUsers } = useContext(UserContext)
    const [usersEvent, setUsersEvents] = useState([])
    const [selectedUserEvent , setSelectedUserEvent] = useState({})

    const date = event.startDate
    const newDate = new Date(date)
    // console.log(usersEvent)
    useEffect(() => {
        getUsersEvents()
        // .then(getUsers)
        // .then(getWatch)
    }, [])

    useEffect(() => {
        const filteredUserEvents = usersEvents.filter(ue => ue.eventId === event.id) || []
        setUsersEvents(filteredUserEvents)
        const foundUserEvent = filteredUserEvents.find(fe => fe.userId === userId) || {}
        setSelectedUserEvent(foundUserEvent)
    }, [usersEvents])
    // const usersWatched = watch.filter(w => w.userId === activeUserId)
    

    // else if (usersWatched.length >= 4) {
    // else if (usersWatched.map(uw => uw.watch === false)) {
    // const usersWatched = usersGoing.map(ug => watch.find(w => ug.id === w.watchedUserId))
    // newDate.toLocaleString('en-US')
    // console.log("usersEvents" , usersEvents)
    return (
        <div>
            <section className="event">
                <h3 className="event__name">
                    <Link to={`/events/${event.id}`}>
                        {event.name}
                    </Link>
                </h3>
                <div className="event__location">{event.location}</div>
                <div className="event__date">{newDate.toLocaleString('en-US')}</div>
                <div className="event__creator">by: {user.name}</div>
                <button type="button" onClick={
                    () => {                     
                        if (selectedUserEvent.userId && userId === selectedUserEvent.userId) {
                            deleteUsersEvent(selectedUserEvent.id)
                        }
                        else {
                            addUsersEvents({
                                eventId: event.id,
                                userId,
                            })
                        }
                    }
                }>I'm in</button>
            </section>
        </div>
    )
}