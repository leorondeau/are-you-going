import React, { useState } from "react"

export const UserEventContext = React.createContext()

export const UsersEventProvider = (props) => {
    // console.log("useState" , useState)
    const [usersEvents , setUsersEvents] = useState([])

    const getUsersEvents = () => {
        return fetch("http://localhost:8088/usersEvents")
        .then(res => res.json())
        // .then(res => console.log("res" ,res.json())) 
        .then(setUsersEvents)
    }
    
    
    const addUsersEvents = usersEvent => {
        return fetch("http://localhost:8088/usersEvents", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usersEvent)
            })
            .then(getUsersEvents)
    }

    const deleteUsersEvent = userid => {
        return fetch(`http://localhost:8088/usersEvents/${userid}`, {
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