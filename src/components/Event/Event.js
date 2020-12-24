import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserEventContext } from '../user/UsersEventsProvider'
import { WatchListContext } from '../watch/WatchProvider'
import { UserContext } from '../user/UserProvider'
import { EventContext } from './EventProvider'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
/* 

Event renders the individual Event card on main. It has a button that allows users to 
add themeselves to an event and remove. It is invoked in EventList.js

*/

export const Event = ({ event, user }) => {
    const activeUserId = parseInt(localStorage.getItem("ayg__id"))

    const { usersEvents, addUsersEvents, deleteUsersEvent, getUsersEvents } = useContext(UserEventContext)
    const { watch, getWatch } = useContext(WatchListContext)
    // const { event, getEvents } = useContext(WatchListContext)
    const { users, getUsers } = useContext(UserContext)


    const [usersEvent, setUsersEvents] = useState([])
    const [selectedUserEvent, setSelectedUserEvent] = useState({})
    const [partyStatus, setPartyStatus] = useState("")
    const [avoidStatus, setAvoidStatus] = useState("")

    const date = event.startDate
    const newDate = new Date(date)
    // console.log(usersEvent)
    useEffect(() => {
        getUsersEvents()
            .then(getUsers)
            .then(getWatch)
        // .then(getEvents)
    }, [])

    useEffect(() => {
        const filteredUserEvents = usersEvents.filter(ue => ue.eventId === event.id) || []
        setUsersEvents(filteredUserEvents)
        const foundUserEvent = filteredUserEvents.find(fe => fe.userId === activeUserId) || {}
        setSelectedUserEvent(foundUserEvent)
    }, [usersEvents])

    // useEffect(() => {

    //     const usersWatched = watch.filter(w => w.userId === activeUserId) || []
    //     const usersTrue = usersWatched.filter(w => w.watch === true )
    //     console.log("usersTruee" , usersTrue)
    //     if (usersTrue.length >= 3) {
    //         setPartyStatus("GO")}

    //     if (usersWatched.find(uw => uw.watch === false)) {
    //         setAvoidStatus(`Lookout`)
    //     }
    // }, [watch])


    // console.log("usersEvents" , usersEvents)
    return (
        <Card className="card">
            <Link className="event__name" to={`/events/${event.id}`}>
                <Card.Header className="event__name" as="h5">

                    {event.name}

                </Card.Header>
                <Card.Body className="event">
                    <Card.Title className="event__location">{event.location}</Card.Title>
                    <Card.Text className="event__date">{newDate.toLocaleString('en-US')}</Card.Text>
                    <Card.Text className="event__creator">by: {user.name}</Card.Text>

                </Card.Body>
            </Link>
            <div className="event__userInfo">
                <Button type="button" className="event-button" block onClick={
                    () => {
                        if (selectedUserEvent.userId && activeUserId === selectedUserEvent.userId) {
                            deleteUsersEvent(selectedUserEvent.id)
                        }
                        else {
                            addUsersEvents({
                                eventId: event.id,
                                userId: activeUserId
                            })
                        }
                    }
                }>Add</Button>
                <Card.Text>{partyStatus} {avoidStatus}</Card.Text>
            </div>
        </Card>

    )
}