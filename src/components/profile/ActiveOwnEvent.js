import React, { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { EventContext } from '../event/EventProvider'
import { UserEventContext } from '../user/UsersEventsProvider'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

/* Event card for active users CREATED events that is invoked in ActiveOwnList */

export const ActiveOwnEvent = ({ event }) => {


    const { deleteOwnerEvent, getEvents, events } = useContext(EventContext)
    const { usersEvents, deleteUsersEvent, getUsersEvents } = useContext(UserEventContext)

    const [ userEventId , setUserEventId ] = useState("")

    const date = event.startDate

    useEffect(()=> {
  
        getEvents()
        .then(() => getUsersEvents)

    }, [])

    useEffect(() => {

        const usersEventId = usersEvents.find(ue => ue.eventId === event.id) || {} 
            setUserEventId(usersEventId)
        

    }, [events, usersEvents])
  
    const newDate = new Date(date)

    return (
        <>
            <Card className="event" bsPrefix="card" className="active-card">
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
                        
                        if(window.confirm("Delete this event?")) {
                        deleteOwnerEvent(event)
                        .then(deleteUsersEvent(userEventId.id))
                        .then(getEvents)
                        
                    }}
                }>Remove</Button>
            </Card>

        </>
    )
}