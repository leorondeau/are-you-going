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
            <Card className="event" bg="dark" text="light" bsPrefix="card">
                <Card.Header className="event__name" as="h5">
                    <Link to={`/events/${event.id}`}>
                        {event.name}
                    </Link>
                </Card.Header>
                <Card.Body>

                    <Card.Text className="event__date">{newDate.toLocaleDateString('en-US')}</Card.Text>

                    <Button type="button" variant="dark" variant="outline-light" block type="button" onClick={
                        () => {
                            deleteOwnerEvent(event)
                        }
                    }>Remove</Button>
                </Card.Body>
            </Card>

        </>
    )
}