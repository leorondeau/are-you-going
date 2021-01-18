import React from "react"
import { Route } from "react-router-dom"
import { EventProvider } from "./event/EventProvider"
import { EventForm } from "./event/EventForm"
import { EventList } from "./event/EventList"
import { EventDetail } from './event/EventDetail'
import { UserProvider } from "./user/UserProvider"
import { UsersEventProvider } from "./user/UsersEventsProvider"
import { UserEventList } from './user/UserEventList'
import { Profile } from './profile/Profile'
import { UserProfile } from './user/UserProfile'
import { WatchProvider } from "./watch/WatchProvider"


export const ApplicationViews = (props) => {
    return (
        <>
            <EventProvider>
                <UserProvider>
                    <UsersEventProvider>
                        <WatchProvider>


                            <Route exact path="/" render={
                                props => <EventList {...props} />
                            } />
                            <Route exact path="/events" render={
                                props => <EventForm {...props} />
                            } />
                            <Route exact path="/events/:eventId(\d+)" render={
                                props => <EventDetail {...props} />
                            } />
                            <Route path="/events/edit/:eventId(\d+)" render={
                                props => <EventForm {...props} />
                            } />

                        </WatchProvider>
                    </UsersEventProvider>
                </UserProvider>
            </EventProvider>
            <UserProvider>
                <UsersEventProvider>
                    <EventProvider>
                        <WatchProvider>


                            <Route exact path="/events/:eventId(\d+)" render={
                                props => <UserEventList {...props} />
                            } />

                        </WatchProvider>
                    </EventProvider>
                </UsersEventProvider>
            </UserProvider>
            <UserProvider>
                <UsersEventProvider>
                    <EventProvider>
                        <WatchProvider>


                            <Route exact path="/profile/:userId(\d+)" render={
                                props => <Profile {...props} />
                            } />

                            <Route exact path="/profile/user/:userId(\d+)" render={
                                props => <UserProfile {...props} />
                            } />

                        </WatchProvider>
                    </EventProvider>
                </UsersEventProvider>
            </UserProvider>
        </>
    )
}
