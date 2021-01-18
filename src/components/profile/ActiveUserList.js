import React, { useEffect, useContext, useState } from 'react'
import { User } from '../user/User'
import { UserContext } from '../user/UserProvider'


/* Lists active users name at the top of their profile page */

export const ActiveUserList = (props) => {
    const { users, getUsers } = useContext(UserContext)
    const activeUserId = parseInt(localStorage.getItem("ayg__id"))
    
    const [profileUser, setProfileUser] = useState({})
    
    const clearLocalStorage = () => {
        localStorage.removeItem("ayg__id")
    }

    useEffect(() => {
        getUsers()
        
    }, [])
    
    useEffect(() => {
        const userProfile = users.find(u => activeUserId === u.id) || {}
        setProfileUser(userProfile)
        
    }, [users])

    
    console.log("props" , props)
    return (
        <>
            <div className="profile">
                <section className="profile-list">

                    <h4>{profileUser.name}</h4>

                </section>
                <button className="logout-button" onClick={() => {
                    clearLocalStorage()
                    props.history.push("/login")
                }}
                >Log Out</button>
            </div>
        </>
    )
}