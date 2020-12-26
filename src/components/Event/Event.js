import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserEventContext } from '../user/UsersEventsProvider'
import { WatchListContext } from '../watch/WatchProvider'
import { UserContext } from '../user/UserProvider'
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

    const [usersEvent, setUsersEvents] = useState([])
    const [selectedUserEvent, setSelectedUserEvent] = useState({})
    const [coolUsers, setCoolUsers] = useState([])
    const [avoidUsers, setAvoidUsers] = useState([])
    const [partyStatus, setPartyStatus] = useState("card")
    // const [avoidStatus, setAvoidStatus] = useState("")

    const date = event.startDate
    const newDate = new Date(date)
    // console.log(usersEvent)
    useEffect(() => {
        getUsersEvents()
            .then(getWatch)

    }, [])

    useEffect(() => {
        const filteredUserEvents = usersEvents.filter(ue => ue.eventId === event.id) || []
        setUsersEvents(filteredUserEvents)
        const foundUserEvent = filteredUserEvents.find(fe => fe.userId === activeUserId) || {}
        setSelectedUserEvent(foundUserEvent)
    }, [usersEvents])

    useEffect(() => {

        const usersWatched = watch.filter(w => w.userId === activeUserId) || []
        const userEventList = usersEvents.filter(ue => ue.eventId === event.id) || []
        const usersTrue = usersWatched.filter(uw => uw.watch)
        const usersFalse = usersWatched.filter(uw => uw.watch === false)

        const coolWatchedAtEvent = userEventList.filter(ue => {
            return usersTrue.find(ut => ue.userId === ut.watchedUserId)
        }) || []
        setCoolUsers(coolWatchedAtEvent)

        const avoidWatchedAtEvent = userEventList.filter(ue => {
            return usersFalse.find(uf => ue.userId === uf.watchedUserId)
        }) || []
        setAvoidUsers(avoidWatchedAtEvent)

        if (coolUsers.length >= 2) {
            setPartyStatus("cool-card")
        }
        if (coolUsers.length >= 2 && avoidUsers.length >= 1) {
            setPartyStatus("caution-card")
        } else if (avoidUsers.length >= 1) {
            setPartyStatus("avoid-card")
        }
    }, [watch])



    return (
        <Card className={partyStatus}>
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
                {/* <Card.Text>{partyStatus} {avoidStatus}</Card.Text> */}
            </div>
        </Card>

    )
}