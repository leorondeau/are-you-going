import React, { useState, useEffect, useContext } from 'react'
import { EventContext } from './EventProvider'
import { UserContext } from '../user/UserProvider'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


/* 

EventDetail is called in application views when Event name Link is clicked on main
page and renders an event card with details added and guestlist link

*/

export const EventDetail = (props) => {
    const activeUserId = parseInt(localStorage.getItem("ayg__id"))

    const { events, getEvents, updateEvent } = useContext(EventContext)
    const { users, getUsers } = useContext(UserContext)

    const [selectedEvent, setSelectedEvent] = useState({})
    const [eventOwner, setEventOwner] = useState({})
    // console.log("props", props)
    const eventDetailId = parseInt(props.match.params.eventId)


    useEffect(() => {
        getEvents()
            .then(getUsers)
    }, [])

    // Because above array is empty only run once.

    useEffect(() => {
        const thisEvent = events.find(e => e.id === eventDetailId) || {}
        setSelectedEvent(thisEvent)
        const thisEventOwner = users.find(u => u.id === selectedEvent.userId) || {}
        setEventOwner(thisEventOwner)
    }, [events, users])
    /* 
    When events or users array is updated useEffect will run the block. 
    Dependency array 
    */

    // const fixedDate = selectedEvent.startDate
    /* 
    If this conditional true (active user has selected) then EventDetail will render
    the edit button that runs updateEvent when clicked.
    */


    const date = selectedEvent.startDate
    const newDate = new Date(date)
    newDate.toLocaleString('en-US')
    //    console.log("object " , newDate.toLocaleString('en-US'))
    if (activeUserId === selectedEvent.userId) {

        return (

            <>

                <Card className="card">
                    <Card.Header className="event__name" as="h5">{selectedEvent.name}</Card.Header>
                    <Card.Body className="event">
                        <Card.Title className="event__location">{selectedEvent.location}</Card.Title>
                        <Card.Text className="event__date">{newDate.toLocaleString('en-US')}</Card.Text>
                        <Card.Text className="event__details">{selectedEvent.details}</Card.Text>
                        <Card.Text className="event__creator"> by: {eventOwner.name}</Card.Text>
                        {/* <Link to={`/events/${eventDetailId}/users`}>
                            Event Goers
                    </Link> */}
                    </Card.Body>
                    <Button className="event-button" onClick={
                        () => {

                            props.history.push(`/events/edit/${selectedEvent.id}`)

                        }
                    }>Edit</Button>
                </Card>
            </>
        )
    } else {
        return (

            <>

                <Card className="card">
                    <Card.Header className="event__name" as="h5">{selectedEvent.name}</Card.Header>
                    <Card.Body className="event">
                        <Card.Title className="event__location">{selectedEvent.location}</Card.Title>
                        <Card.Text className="event__date">{newDate.toLocaleString('en-US')}</Card.Text>
                        <Card.Text className="event__details">{selectedEvent.details}</Card.Text>
                        <Card.Text className="event__creator"> by: {eventOwner.name}</Card.Text>
                        {/* <Link to={`/events/${eventDetailId}/users`}>
                            Event Goers
                </Link> */}
                    </Card.Body>

                </Card>
            </>
        )

    }

}