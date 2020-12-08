import React, { useState } from "react"

export const UserContext = React.createContext()

export const UserProvider = (props) => {
    const [users , setUsers] = useState([])

    const getUsers = () => {
        return fetch("http://localhost:8088/users")
        .then(res => res.json())
        .then(setUsers)
    }

    const addUser = User => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(User)
            })
            .then(getUsers)
    }

    const deleteUser = userid => {
        return fetch(`http://localhost:8088/users/${userid}`, {
            method: "DELETE",
        })
        .then(getUsers)

    }

    return (
        <UserContext.Provider value = {{
            Users , addUser , getUsers , releaseUser
        }}>
            {props.children}
        </UserContext.Provider>
    )
}