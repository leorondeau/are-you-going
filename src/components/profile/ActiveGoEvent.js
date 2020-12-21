import React, { useContext, useState, useEffect } from 'react'
import { UserEventContext } from '../user/UsersEventsProvider'
import { Link } from 'react-router-dom'


export const ActiveGoEvent = ({ event }) => {
    // {console.log("USER" , user.name)}
    const userId = parseInt(localStorage.getItem("ayg__id"))


    const { usersEvents, deleteUsersEvent, getUsersEvents } = useContext(UserEventContext)

    const date = event.startDate

    const newDate = new Date(date)

    useEffect(() => {
        getUsersEvents()
    }, [])

    // console.log("usersEvents" , usersEvents)

    return (

        <section className="event">
            <p className="event__name">
                <Link to={`/events/${event.id}`}>
                    {event.name}
                </Link>
            </p>

            <div className="event__date">{newDate.toLocaleDateString('en-US')}</div>
            <button type="button" onClick={
                () => {
                    const filteredUserEvents = usersEvents.filter(ue => ue.eventId === event.id)
                    const selectedUserEvent = filteredUserEvents.find(fe => fe.userId === userId)
                    deleteUsersEvent(selectedUserEvent.id)
                }

            }>I'm out</button>

        </section>
    )
}
