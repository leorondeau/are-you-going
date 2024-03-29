import React, { useState } from "react"

export const UserEventContext = React.createContext()


/*  GET, POST, DELETE methods for all data assoicated with Users Events. */

export const UsersEventProvider = (props) => {
    
    const [usersEvents , setUsersEvents] = useState([])

    const getUsersEvents = () => {
        return fetch("http://localhost:8000/usersEvents")
        .then(res => res.json())
        .then(setUsersEvents)
    }
    
    
    const addUsersEvents = usersEvent => {
        return fetch("http://localhost:8000/usersEvents", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usersEvent)
            })
            .then(getUsersEvents)
    }

    const deleteUsersEvent = id => {
        return fetch(`http://localhost:8000/usersEvents/${id}`, {
            method: "DELETE",
        })
        .then(getUsersEvents)

    }

    return (
        <UserEventContext.Provider value = {{
            usersEvents , addUsersEvents , getUsersEvents , deleteUsersEvent 
        }}>
            {props.children}
        </UserEventContext.Provider>
    )
}