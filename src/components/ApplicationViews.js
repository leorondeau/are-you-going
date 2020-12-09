import React from "react"
import { Route } from "react-router-dom"
import { EventProvider } from "./event/EventProvider"
import { EventForm } from "./event/EventForm"

// import { UserProvider } from "./user/UserProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            <EventProvider>
                <Route path="/events" render={
                    props => <EventForm {...props} />
                } />
            </EventProvider>
        </>
    )
}
