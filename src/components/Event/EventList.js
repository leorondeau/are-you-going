import React , { useEffect , useContext} from 'react'
import { EventContext } from './EventProvider'
// import { Link } from 'react-router-dom'
import { Event } from './Event'
import './Event.css'

export const EventList = (props) => {
    const { events , getEvents } = useContext(EventContext)

    useEffect(() => {
    getEvents()
} , [])

console.log("events" , events)
    return (
        <>
        <div className="events">
            <article className="eventList">
                {
                    events.map(e => {
                        return (
                        <Event key={e.id } event={e} />
                            )

                    })
                }
            </article>
        </div>
        </>
    )

}
