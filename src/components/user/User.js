import React from 'react'
import { Link } from 'react-router-dom'

/* User name invoked in UserEventList for users that are atttending an event. Links to individual
users profile or active user if their own name is clicked */

export const User = ({ user }) => {
    
    const otherUser = user.id
    const activeUserId = parseInt(localStorage.getItem("ayg__id"))
    

if (otherUser === activeUserId) {

    return (
    
        <>
        <section className="user">
            <h6 className="user-name">
                
                <Link to={`/profile/${activeUserId}`}> {user.name}</Link>
    
            </h6>
        </section>
    </>
    )
    



} else {
    
    return (
    
    <>
    <section className="user">
        <h6 className="user-name">
            
            <Link to={`/profile/user/${user.id}`}> {user.name}</Link>

        </h6>
    </section>
</>
)
    }
}