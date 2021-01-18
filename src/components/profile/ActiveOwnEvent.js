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
        
        getUsersEvents()
        .then(getEvents)

    }, [])

    useEffect(() => {

        // const usersEventId = usersEvents.find(ue => ue.eventId === event.id) || {} 
        //     setUserEventId(usersEventId)
        // console.log("userEventId" , usersEventId.id)

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
                        // deleteUsersEvent(userEventId)
                        deleteOwnerEvent(event)
                    }
                }>Remove</Button>
            </Card>

        </>
    )
}