import React ,{ useContext , useState , useEffect} from 'react'
import { EventContext } from '../event/EventProvider'
import { UserEventContext } from '../user/UsersEventsProvider'


export const ProfileGoEvent = ({ event }) => {
    // {console.log("USER" , user.name)}
    const userId = parseInt(localStorage.getItem("ayg__id"))

    const { usersEvents, deleteUsersEvent, getUsersEvents } = useContext(UserEventContext)
    const [ userEvent, setUserEvents ] = useState({})
    

    

    useEffect(() => {
        getUsersEvents()
    }, [])

    // useEffect(() => {

    // }, [])

    return (

        <section className="event">
            <p className="event__name">Event: {event.name}</p>
            <button type="button" onClick={
                () => {
                    const selectedUserEvent = usersEvents.find(ue => ue.eventId === event.id)
                    deleteUsersEvent(selectedUserEvent.id)
                }

            }>I'm Out</button>

        </section>
    )
}
