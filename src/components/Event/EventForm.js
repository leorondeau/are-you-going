import React, { useContext, useState, useEffect } from "react"
import { EventContext } from "./EventProvider"
import  Form  from "react-bootstrap/Form"
import FormGroup from 'react-bootstrap/FormGroup'
import Button from 'react-bootstrap/Button'
import { UserContext } from '../user/UserProvider'

/* Renders on /events where acitve user can enter in a new event or edit a saved event */

export const EventForm = (props) => {
    
    const { users, getUsers } = useContext(UserContext)
    const { addEvent, events, updateEvent, getEvents } = useContext(EventContext)
    


    const [event, setEvent] = useState({ name: "", location: "", details: "", startDate: "" })

    /* 
    .hasOwnProperty returns a boolean and is looking for eventId which
    is part of the Route path in Application Views
    */
    const editMode = props.match.params.hasOwnProperty("eventId")



    const handleControlledInputChange = (e) => {

        // Adding key value pairs to the object through each from input
        //    Without this only the last key value pair entered will send
        const newEvent = Object.assign({}, event)
        newEvent[e.target.name] = e.target.value
        setEvent(newEvent)
    }

    // This function fills the form with associated event to be edited based on the id.
    const getEventInEditMode = () => {
        if (editMode) {
            const eventId = parseInt(props.match.params.eventId)
            const selectedEvent = events.find(e => e.id === eventId) || {}
            setEvent(selectedEvent)
        }
    }

    // Get events from db when component initializes
    useEffect(() => {
        getEvents()
        .then(getUsers)
    }, [])

    // Once provider state is updated, determine the event (if edit)
    useEffect(() => {
        getEventInEditMode()
    }, [events])



    const constructNewEvent = () => {

        const userId = parseInt(localStorage.getItem("ayg__id"))
        const name = event.name
        const location = event.location
        // const newDate = Date.parse(event.startDate)
        // Date.parse converts to milliseconds
        const startDate = event.startDate
    
        if (location === "") {
            window.alert("Please select a location")
        } else {
            if (editMode) {
                updateEvent({
                    id: event.id,
                    name,
                    location,
                    startDate,
                    details: event.details,
                    userId
                })
                    .then(() => props.history.push("/"))
            } else {
                addEvent({
                    name,
                    location,
                    startDate,
                    details: event.details,
                    userId
                })
                    .then(() => props.history.push("/"))
            }
        }
    }
    const [startDate, setStartDate] = useState(null);
    return (
        <Form className="" bsPrefix="form-body">
            {/* If editmode true Update Event else Submit Event */}
            
            <Form.Group className="event-form-group">
                
                    <Form.Label className="event-form" htmlFor="name">Event Name</Form.Label>
                    <Form.Control className="event-form" type="text" name="name" required autoFocus className="form-control" 
                        proptype="varchar"
                        placeholder=""
                        value={event.name}
                        onChange={handleControlledInputChange}
                    />
                    
                
            </Form.Group>
            <Form.Group className="event-form-group">                
                    <Form.Label className="event-form" htmlFor="location">Location</Form.Label>
                    <Form.Control type="text" name="location" required autoFocus className="form-control" 
                        proptype="varchar"
                        placeholder=""
                        value={event.location}
                        onChange={handleControlledInputChange}
                    />                
            </Form.Group>
            <Form.Group className="event-form-group">                
                    <Form.Label className="event-form" htmlFor="details">Details</Form.Label>
                    <Form.Control type="text" name="details" required autoFocus className="form-control" 
                        proptype="varchar"
                        placeholder=""
                        value={event.details}
                        onChange={handleControlledInputChange}
                    />                
            </Form.Group>            
            <Form.Group className="event-form-group date-form">                
                    <Form.Control type="datetime-local" name="startDate" proptype="date" 
                        onChange={handleControlledInputChange} value={event.startDate}>
                    </Form.Control>                
            </Form.Group>
            <Button  type="submit" bsPrefix="form-button" 
                onClick={evt => {
                    evt.preventDefault()
                    constructNewEvent()
                }}
                className="btn btn-primary">
                {/* If editmode true Save Updates else Save Event */}
                {editMode ? "Save Updates" : "Save Event"}
            </Button>
        </Form>
    )
}