import React, { useState } from "react"

export const WatchListContext = React.createContext()

export const WatchProvider = (props) => {
    // console.log("useState" , useState)
    const [watch , setWatch] = useState([])

    const getWatch = () => {
        return fetch("http://localhost:8088/watchlist")
        .then(res => res.json())
        // .then(res => console.log("res" ,res.json())) 
        .then(setWatch)
    }
    

    const addWatched = watch => {
        return fetch("http://localhost:8088/watchlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(watch)
            })
            .then(getWatch)
    }

    const updateWatched = watch => {
        return fetch(`http://localhost:8088/watchlist/${watch.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(watch)
            })
            .then(getWatch)
    }
    const deleteWatched = id => {
        return fetch(`http://localhost:8088/watchlist/${id}`, {
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