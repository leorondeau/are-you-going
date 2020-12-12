import React, { useEffect, useContext } from 'react'
import { EventContext } from './EventProvider'
import { Event } from './Event'
import { UserContext } from '../user/UserProvider'
import './Event.css'


export const EventList = (props) => {
    const { events, getEvents } = useContext(EventContext)
    const { users, getUsers } = useContext(UserContext)

    const []
    
    // The order of these useEffect calls is crucial
    useEffect(() => {
        getUsers()
    
    }, [])
    // console.log("props" , props)
    useEffect(() => {
        getEvents()
    }, [])

    // console.log("users", users)
    // console.log("events" , events)

    return (
        <>
            <div className="events">
                <article className="eventList">
                    {
                        
                        events.map(e => {
                            const owner= users.find(u => e.userId === u.id)
                            // console.log("owner" , owner)
                            
                            return (
                                <Event key={e.id} event={e} user={owner} />
                            )
                    
                        })
                    }
                    
                </article>
            </div>
        </>
    )

}

