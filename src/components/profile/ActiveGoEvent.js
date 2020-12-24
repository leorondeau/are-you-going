import React, { useContext, useState, useEffect } from 'react'
import { UserEventContext } from '../user/UsersEventsProvider'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export const ActiveGoEvent = ({ event }) => {
    // {console.log("USER" , user.name)}
    const userId = parseInt(localStorage.getItem("ayg__id"))


    const { usersEvents, deleteUsersEvent, getUsersEvents } = useContext(UserEventContext)

    const date = event.startDate

    const newDate = new Date(date)

    useEffect(() => {
        getUsersEvents()
    }, [])

    // console.log("usersEvents" , usersEvents)

    return (

        <Card className="event" className="active-card">
            <Card.Header className="event__name" as="h5">
                <Link className="event__name" to={`/events/${event.id}`}>
                    {event.name}
                </Link>
            </Card.Header>
            <Card.Body>

                <Card.Text className="event__date">{newDate.toLocaleDateString('en-US')}</Card.Text>
                <Button type="button" className="active-button" block type="button" onClick={
                    () => {
                        const filteredUserEvents = usersEvents.filter(ue => ue.eventId === event.id)
                        const selectedUserEvent = filteredUserEvents.find(fe => fe.userId === userId)
                        deleteUsersEvent(selectedUserEvent.id)
                    }

                }>I'm out</Button>

            </Card.Body>
        </Card>
    )
}
