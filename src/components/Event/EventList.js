import React, { useEffect, useContext } from 'react'
import { EventContext } from './EventProvider'
import { Event } from './Event'
import { UserContext } from '../user/UserProvider'
import './Event.css'

/* 
Lists all events on main page by mapping events and invoking Event() passing
each one through. 
*/

export const EventList = (props) => {
    const { events, getEvents } = useContext(EventContext)
    const { users, getUsers } = useContext(UserContext)

    
    
    // The order of these useEffect calls is crucial
    useEffect(() => {
        getUsers()
        .then(getEvents)
    
    }, [])
    // console.log("props" , props)
    

    // console.log("users", users)
    // console.log("events" , events)

    return (
        <>
            <div className="events">
                <article className="eventList">
                    {
                        
                        events.map(e => {
                            /* Finds event creator obj for each card */
                            const owner= users.find(u => e.userId === u.id)
                            
                            
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

