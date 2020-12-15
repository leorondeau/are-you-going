import React, { useEffect, useContext , useState } from 'react'
import { User } from '../user/User'
import { UserContext } from '../user/UserProvider'



export const ActiveUserList = () => {
    const { users, getUsers } = useContext(UserContext)
    const activeUserId = parseInt(localStorage.getItem("ayg__id"))
    
    const [profileUser , setProfileUser ] = useState({})
    
    useEffect(() => {
        getUsers()
        
    }, [])
    
    useEffect(() => {
        const userProfile = users.find(u => activeUserId === u.id) || {}
        setProfileUser(userProfile)

    }, [users])
    
    // console.log("profileUser" , profileUser)

    return (
        <>
            <div className="profile">
                <section className="profileList">
                    
                    {
                        <User key={profileUser.id} user={profileUser} />
                    }
                </section>
            </div>
        </>
    )
}