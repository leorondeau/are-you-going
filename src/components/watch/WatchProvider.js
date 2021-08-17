import React, { useState } from "react"

export const WatchListContext = React.createContext()


/*  GET, POST, DELETE methods for all data assoicated for Watched Users. */

export const WatchProvider = (props) => {
    
    const [watch , setWatch] = useState([])

    const getWatch = () => {
        return fetch("http://localhost:8000/watchlist")
        .then(res => res.json())
        
        .then(setWatch)
    }
    

    const addWatched = watch => {
        return fetch("http://localhost:8000/watchlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(watch)
            })
            .then(getWatch)
    }

    const updateWatched = watch => {
        return fetch(`http://localhost:8000/watchlist/${watch.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(watch)
            })
            .then(getWatch)
    }
    const deleteWatched = id => {
        return fetch(`http://localhost:8000/watchlist/${id}`, {
            method: "DELETE",
        })
        .then(getWatch)

    }

    return (
        <WatchListContext.Provider value = {{
            watch , getWatch , addWatched , deleteWatched , setWatch , updateWatched
        }}>
            {props.children}
        </WatchListContext.Provider>
    )
}