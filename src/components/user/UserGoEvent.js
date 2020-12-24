import React from 'react'
import {Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./User.css"

export const UserGoEvent = ({ event }) => {


    return (

        <Card className="event" bg="dark" text="light" bsPrefix="card">
            <Card.Title className="user__event__name">
                <Link to={`/events/${event.id}`}>
                    {event.name}
                </Link>
                <Card.Text>{event.location}</Card.Text>
            </Card.Title>
        </Card>
    )
}