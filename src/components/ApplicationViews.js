import React from "react"
import { Route } from "react-router-dom"
import { EventProvider } from "./event/EventProvider"
import { EventForm } from "./event/EventForm"
import { EventList } from "./event/EventList"
import { UserProvider } from "./user/UserProvider"
import { UsersEventProvider } from "./user/UsersEventsProvider"
import { EventDetail } from './event/EventDetail'




export const ApplicationViews = (props) => {
    return (
        <>
            <EventProvider>
                <UserProvider>
                    <UsersEventProvider>

                    <Route exact path="/events" render={
                        props => <EventForm {...props} />
                    } />
                    <Route exact path="/" render={
                        props => <EventList {...props} />
                    } />
                    <Route path="/events/:eventId(\d+)" render={
                        props => <EventDetail {...props}/>
                    }/>
                    </UsersEventProvider>
                </UserProvider>
            </EventProvider>
        </>
    )
}
