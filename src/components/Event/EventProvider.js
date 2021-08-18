import React, { useState } from "react"

export const EventContext = React.createContext()

/*  GET, POST, DELETE, UPDATE methods for all data assoicated with Event. */

export const EventProvider = (props) => {
    const [events, setEvents] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getEvents = () => {

        return fetch("http://localhost:8000/events", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("ayg_token")}`
            }
        })
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
        return fetch(`http://localhost:8000/events/${id}?_expand=user`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("ayg_token")}`
            }
        })
            .then(res => res.json())
    }


    const addEvent = event => {
        return fetch("http://localhost:8000/events", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("ayg_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(getEvents)
    }
    const deleteOwnerEvent = event => {
        return fetch(`http://localhost:8000/events/${event.id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("ayg_token")}`,
                "Content-Type": "application/json"
            }
        })
            .then(getEvents)
    }


    // Whenever altering an existing entity the fetch url must have the id
    const updateEvent = event => {
        return fetch(`http://localhost:8000/events/${event.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("ayg_token")}`,
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