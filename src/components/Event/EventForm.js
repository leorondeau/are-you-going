import React, { useContext, useState, useEffect, useRef } from "react"
import { EventContext } from "./EventProvider"
// import 'react-date-picker/dist/react-date-picker.css'
// import 'react-date-picker/dist/react-date-picker.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import DatePicker from "react-date-picker"


// import { UserContext } from "../user/UserProvider"

export const EventForm = (props) => {
    // Use the required context providers for data
    // const { users, getUsers } = useContext(UserContext)
    const { addEvent, events, updateEvent, getEvents } = useContext(EventContext)
    // const [value, onChange] = useState(new Date())


    const [event, setEvent] = useState({})


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
            const selectedEvent = event.find(e => e.id === eventId) || {}
            setEvent(selectedEvent)
        }
    }

    // Get events from API when component initializes
    useEffect(() => {
        getEvents()
        // getUsers()
    }, [])

    // Once provider state is updated, determine the event (if edit)
    useEffect(() => {
        getEventInEditMode()
    }, [events])



    const constructNewEvent = () => {

        const userId = parseInt(localStorage.getItem("ayg__id"))
        const name = event.name
        const location = event.location
        const time = event.time

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
                    time,
                    userId
                })
                    .then(() => props.history.push("/"))
            } else {
                addEvent({
                    name,
                    location,
                    startDate,
                    details: event.details,
                    time,
                    userId
                })
                    .then(() => props.history.push("/"))
            }
        }
    }
    const [startDate, setStartDate] = useState(null);
    return (
        <form className="">
            {/* If editmode true Update Event else Submit Event */}
            <h2 className="eventForm__title">{editMode ? "Update Event" : "Submit Event"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name"></label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="Event name"
                        value={event.name}
                        onChange={handleControlledInputChange}
                    />
                    {/* {console.log("eventName", event.name)} */}
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location"></label>
                    <input type="text" name="location" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="Event location"
                        value={event.location}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="details"></label>
                    <input type="text" name="details" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="Event details"
                        value={event.details}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            {/* Date.parse(date.current.value) Turn into a date object */}
            <fieldset>
                <div className="form-group">
                    <DatePicker selected={startDate}
                        onChange={date => setStartDate(date)}
                    />
                </div>
            </fieldset>
            <div>
                <label for="appt"></label>

                <input type="time" id="appt" name="appt"
                    
                    value={event.time}
                    onChange={handleControlledInputChange}>
                        
                </input>
            </div>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewEvent()
                }}
                className="btn btn-primary">
                {/* If editmode true Save Updates else Save Event */}
                {editMode ? "Save Updates" : "Save Event"}
            </button>
        </form>
    )
}