import React , { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserEventContext } from '../user/UsersEventsProvider'



export const Event = ({ event, user }) => {
    const userId = parseInt(localStorage.getItem("ayg__id"))
    
    const { addUsersEvents , deleteUsersEVent } = useContext(UserEventContext)
    return (
        <div>
            <section className="event">
                <h3 className="event__name">
                    <Link to={`/events/${event.id}`}>
                        {event.name}
                    </Link>
                </h3>
                <div className="event__location">{event.location}</div>
                <div className="event__date">{event.startDate}</div>
                <div className="event__creator">by: {user.name}</div>
                <button type="button" onClick={
                    () => addUsersEvents({
                        eventId: event.id,
                        userId
                    })

                   
                }>Yes</button>
            </section>
        </div>
        )
        }