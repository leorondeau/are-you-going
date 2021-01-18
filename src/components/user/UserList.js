import React, { useEffect, useContext, useState } from 'react'
import { UserContext } from './UserProvider'

/* Lists the name of the user at the top of their respective profile page */

export const UserList = (props) => {
    const { users, getUsers } = useContext(UserContext)
    const user = parseInt(props.match.params.userId)

    


    const [profileUser, setProfileUser] = useState({})

    useEffect(() => {
        getUsers()

    }, [])

    useEffect(() => {
        const userProfile = users.find(u => user === u.id) || {}
        setProfileUser(userProfile)

    }, [users])


    return (
        <>
            <div className="profile">
                <section className="profile-list user-go-list">
                    
                    <h4>{profileUser.name}</h4>
                    
                </section>
            </div>
        </>
    )
}