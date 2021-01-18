import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserEventContext } from '../user/UsersEventsProvider'
import { WatchListContext } from '../watch/WatchProvider'
import { UserContext } from '../user/UserProvider'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { EventContext } from './EventProvider'
/* 

Event renders the individual Event card on main. It has a button that allows users to 
add themeselves to an event and remove. It is invoked in EventList.js

*/

export const Event = ({ event, user }) => {
    const activeUserId = parseInt(localStorage.getItem("ayg__id"))

    const { usersEvents, addUsersEvents, deleteUsersEvent, getUsersEvents } = useContext(UserEventContext)
    const { watch, getWatch } = useContext(WatchListContext)
    const { events, getEvents } = useContext(EventContext)

    const [usersEvent, setUsersEvents] = useState([])
    const [selectedUserEvent, setSelectedUserEvent] = useState({})
    const [coolUsers, setCoolUsers] = useState([])
    const [avoidUsers, setAvoidUsers] = useState([])
    const [partyStatus, setPartyStatus] = useState("card")
    const [buttonStatus, setButtonStatus] = useState("Add")
    const [tableKey, setTableKey] = useState(1);
    

    const date = event.startDate
    const newDate = new Date(date)
    
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
        
        if (coolUsers.length >= 1) {
            setPartyStatus("cool-card")
        }
        if (coolUsers.length >= 1 && avoidUsers.length >= 1) {
            setPartyStatus("caution-card")
        } else if (avoidUsers.length >= 1) {
            setPartyStatus("avoid-card")
        }
    }, [watch])


    useEffect(() => {
        
        if (activeUserId === selectedUserEvent.userId) {
            
            setButtonStatus("Remove")
            
        }
        else {

            setButtonStatus("Add")
        }
        
                
    }, [usersEvents , events])
        
    

    return (
        <Card className={partyStatus}>
            <Link className="event-name" to={`/events/${event.id}`}>
                <Card.Header className="event-name" as="h5">
                    {event.name}
                </Card.Header>
                <Card.Body className="event">
                    <Card.Title className="event-location">{event.location}</Card.Title>
                    <Card.Text className="event-date">{newDate.toLocaleString('en-US')}</Card.Text>
                    <Card.Text className="event-creator">by: {user.name}</Card.Text>

                </Card.Body>
            </Link>
            <div className="event-userInfo">
                <Button type="button" className="event-button" key={tableKey} block onClick={
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
                        
                        setTableKey(tableKey + 1);
                    }
                }>{buttonStatus}</Button>

            </div>
        </Card>

    )
}

