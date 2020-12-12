import React from "react"
import { Route } from "react-router-dom"
import { EventProvider } from "./event/EventProvider"
import { EventForm } from "./event/EventForm"
import { EventList } from "./event/EventList"
import { EventDetail } from './event/EventDetail'
import { UserProvider } from "./user/UserProvider"
import { UsersEventProvider } from "./user/UsersEventsProvider"
import { UserList } from './user/UserList'




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
                        <Route exact path="/events/:eventId(\d+)" render={
                            props => <EventDetail {...props} />
                        } />
                    </UsersEventProvider>
                </UserProvider>
            </EventProvider>
            <UserProvider>
                <UsersEventProvider>
                    <EventProvider>

                        <Route path="/events/:eventId(\d+)/users" render={
                            props => <UserList {...props} />
                        } />

                    </EventProvider>
                </UsersEventProvider>
            </UserProvider>
        </>
    )
}
