import React, { useEffect, useContext, useState } from 'react'
import { UserContext } from './UserProvider'



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
                <section className="profileList">
                    
                    <h2>{profileUser.name}</h2>
                    
                </section>
            </div>
        </>
    )
}