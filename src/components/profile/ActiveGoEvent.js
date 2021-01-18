import React, { useContext, useState, useEffect } from 'react'
import { UserEventContext } from '../user/UsersEventsProvider'
import { WatchListContext } from '../watch/WatchProvider'
import { UserContext } from '../user/UserProvider'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

/* Lists and renders individual event card in active users profile with limited info. Called in 
ActiveGoEventList to be rendered as a list. Also has delete event feature "I'm Out" for
active user. Watch feature styles card according to radio button status */

export const ActiveGoEvent = ({ event }) => {

    const activeUserId = parseInt(localStorage.getItem("ayg__id"))


    const { usersEvents, deleteUsersEvent, getUsersEvents } = useContext(UserEventContext)
    const { watch, getWatch } = useContext(WatchListContext)
    const [coolUsers, setCoolUsers] = useState([])
    const [avoidUsers, setAvoidUsers] = useState([])
    const [partyStatus, setPartyStatus] = useState("card")

    const date = event.startDate

    const newDate = new Date(date)

    useEffect(() => {
        getUsersEvents()
            .then(getWatch)
    }, [])

    
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

        if (coolUsers.length >= 1) {
            setPartyStatus("cool-card")
        }
        if (coolUsers.length >= 1 && avoidUsers.length >= 1) {
            setPartyStatus("caution-card")
        } else if (avoidUsers.length >= 1) {
            setPartyStatus("avoid-card")
        }
    }, [watch])


    return (

        <Card className="event" className={partyStatus}>
            <Link className="event-name" to={`/events/${event.id}`}>
                <Card.Header className="event-name" as="h5">
                    {event.name}
                </Card.Header>
                <Card.Body>

                    <Card.Text className="event-date">{newDate.toLocaleDateString('en-US')}</Card.Text>
                </Card.Body>
            </Link>
            <Button type="button" className="event-button" block type="button" onClick={
                () => {
                    const filteredUserEvents = usersEvents.filter(ue => ue.eventId === event.id)
                    const selectedUserEvent = filteredUserEvents.find(fe => fe.userId === activeUserId)
                    deleteUsersEvent(selectedUserEvent.id)
                }
            }>I'm out</Button>
        </Card>
    )
}
