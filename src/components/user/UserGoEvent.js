import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./User.css"

/* Event card for events that non active user is attending and show on their
personal profile page */

export const UserGoEvent = ({ event }) => {


    return (

        <Card className="event" bsPrefix="card">
            <Link className="event-name" to={`/events/${event.id}`}>
                <Card.Title className="user-event-name">
                    {event.name}
                    <Card.Text>{event.location}</Card.Text>
                </Card.Title>
            </Link>
        </Card>
    )
}