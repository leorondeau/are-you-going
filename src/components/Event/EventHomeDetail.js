import React, { useState, useEffect, useContext } from 'react'
import { EventContext } from './EventProvider'
import { UserContext } from '../user/UserProvider'


export const EventHomeDetail = (props) => {
    const { events , getEvents } = useContext(EventContext)
    const { users, getUsers } = useContext(UserContext)

    // const [user, setUser] = useState({})
    const [event, setEvent] = useState({})
    
    const userId = parseInt(localStorage.getItem("ayg__id"))
    console.log("userId" , userId)
    const eventOwner = events.map(e => {
        const creator = users.find(u => e.userId === u.id)
        return creator
    })
    console.log("eventOwner" , eventOwner)
    
    useEffect(() => { 
        getUsers()
        
    }, [])
    console.log("users" , users)
    useEffect(() => {
        getEvents()
        
    }, [])
    // console.log("events" , events)
    
    
    useEffect(() => {
        const eventObj = events.map(e => e.userId === userId) 
        setEvent(eventObj)
    }, [])
    // console.log("event" , eventObj)
    // console.log("eventName" , event.name)
    
    return (
        
        <section className="event">
            <h3 className="event__name">{event.name}</h3>
            <h2 className="event__location">{event.location}</h2>
            <div className="event__date">{event.startDate}</div>
            <div className="event__details">{event.details}</div>
            <div className="event__creator"> by: {eventOwner.name }</div>
        </section>

    )
}