import React, { useContext, useState, useEffect } from "react"
import { EventContext } from "./EventProvider"

// import { UserContext } from "../user/UserProvider"

export const EventForm = (props) => {
    // Use the required context providers for data
    // const { users, getUsers } = useContext(UserContext)
    const { addEvent, events, updateEvent, getEvents } = useContext(EventContext)
    
    // Component state
    const [event, setEvent] = useState({})

    // Is there a a URL parameter??
    const editMode = props.match.params.hasOwnProperty("eventId")
    
    // Has to be defined in the component
    const handleControlledInputChange = (event) => {
        /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
        */
       // Adding key value pairs to the object through each from input
        const newEvent = Object.assign({}, event)
        newEvent[event.target.name] = event.target.value
        setEvent(newEvent)
    }

    /*
        If there is a URL parameter, then the user has chosen to
        edit an event.
            1. Get the value of the URL parameter.
            2. Use that `id` to find the event.
            3. Update component state variable.
    */

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
   
        if (location === "" ) {
            window.alert("Please select a location")
        } else {
            if (editMode) {
                updateEvent({
                    id: event.id,
                    name,
                    location,
                    // date: event.date,
                    // details: event.details,
                    // time: event.time,
                    userId
                })
                    .then(() => props.history.push("/"))
            } else {
                addEvent({
                    name,
                    location,
                    // date: event.date,
                    // details: event.details,
                    // time: event.time,
                    userId
                })
                    .then(() => props.history.push("/"))
            }
        }
    }

    return (
        <form className="">
            <h2 className="eventForm__title">{editMode ? "Update Event" : "Submit Event"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Event name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="Event name"
                        value={event.name}
                        onChange={handleControlledInputChange}
                    />
                    {console.log("eventName" , event.name)}
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Event location: </label>
                    <input type="text" name="location" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="Event location"
                        value={event.location}
                        onChange={handleControlledInputChange}
                        />
                        {console.log("eventLocation" , event.location)}
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewEvent()
                }}
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Save Event"}
            </button>
        </form>
    )
}