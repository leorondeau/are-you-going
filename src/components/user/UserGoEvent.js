import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./User.css"

export const UserGoEvent = ({ event }) => {


    return (

        <Card className="event" bsPrefix="card">
            <Link className="event__name" to={`/events/${event.id}`}>
                <Card.Title className="user__event__name">
                    {event.name}
                    <Card.Text>{event.location}</Card.Text>
                </Card.Title>
            </Link>
        </Card>
    )
}