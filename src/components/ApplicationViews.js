import React from "react"
import { Route } from "react-router-dom"
import { EventProvider } from "./Event/EventProvider"
import { EventForm } from "./Event/EventForm"

// import { UserProvider } from "./user/UserProvider"

export const ApplicationViews = (props) => {
    return (
        <>
        <EventProvider>
            <Route exact path="/events/create">
                {/* <EventForm /> */}
            </Route>
        </EventProvider>
        </>
    )
    }
