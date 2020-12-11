import React from "react"
import { Route } from "react-router-dom"
import { EventProvider } from "./event/EventProvider"
import { EventForm } from "./event/EventForm"
import { EventList } from "./event/EventList"
import { UserProvider } from "./user/UserProvider"
import { UsersEventProvider } from "./user/UsersEventsProvider"
// import { EventHomeDetail } from './event/EventHomeDetail'




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
                    {/* <Route path="/events/:eventId(\d+)" render={
                        props => <EventHomeDetail {...props}/>
                    }/> */}
                    </UsersEventProvider>
                </UserProvider>
            </EventProvider>
        </>
    )
}
