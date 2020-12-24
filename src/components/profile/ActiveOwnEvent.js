import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { EventContext } from '../event/EventProvider'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export const ActiveOwnEvent = ({ event }) => {


    const { deleteOwnerEvent } = useContext(EventContext)

    const date = event.startDate

    const newDate = new Date(date)

    return (
        <>
            <Card className="event" bsPrefix="card" className="active-card">
                <Link className="event__name" to={`/events/${event.id}`}>
                    <Card.Header className="event__name" as="h5">
                        {event.name}
                    </Card.Header>
                    <Card.Body>

                        <Card.Text className="event__date">{newDate.toLocaleDateString('en-US')}</Card.Text>
                    </Card.Body>
                </Link>

                <Button type="button" className="active-button" block type="button" onClick={
                    () => {
                        deleteOwnerEvent(event)
                    }
                }>Remove</Button>
            </Card>

        </>
    )
}