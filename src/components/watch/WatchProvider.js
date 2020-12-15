import React, { useState } from "react"

export const WatchListContext = React.createContext()

export const WatchProvider = (props) => {
    // console.log("useState" , useState)
    const [watch , setWatch] = useState([])

    const getWatch = () => {
        return fetch("http://localhost:8088/watchlist")
        .then(res => res.json())
        // .then(res => console.log("res" ,res.json())) 
        .then(setWatched)
    }
    
    
    const addWatched = watch => {
        return fetch("http://localhost:8088/usersEvents", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usersEvent)
            })
            .then(getUsersEvents)
    }

    const deleteUsersEvent = id => {
        return fetch(`http://localhost:8088/usersEvents/${id}`, {
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