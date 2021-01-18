import React, { useState } from "react"

export const EventContext = React.createContext()

/*  GET, POST, DELETE, UPDATE methods for all data assoicated with Event. */

export const EventProvider = (props) => {
    const [events, setEvents] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getEvents = () => {
        
        return fetch("http://localhost:8088/events")
            .then(res => res.json())
            .then(res => res.sort((a, b) => Date.parse(a.startDate) - Date.parse(b.startDate))
            )
            .then(setEvents)

    }

    // Use expand when source has foreign key
    // Use embed when no foreign key.
    // If uncertain embed will give empty array if no fk
    // One to many relationship, embed
    const getEventById = (id) => {
        return fetch(`http://localhost:8088/events/${id}?_expand=user`)
            .then(res => res.json())
    }


    const addEvent = event => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(getEvents)
    }
    const deleteOwnerEvent = event => {
        return fetch(`http://localhost:8088/events/${event.id}`, {
            method: "DELETE"
        })
            .then(getEvents)
    }


    // Whenever altering an existing entity the fetch url must have the id
    const updateEvent = event => {
        return fetch(`http://localhost:8088/events/${event.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(getEvents)
    }

    return (
        <EventContext.Provider value={{
            events, addEvent, getEvents, getEventById, searchTerms, setSearchTerms, deleteOwnerEvent, updateEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )

}