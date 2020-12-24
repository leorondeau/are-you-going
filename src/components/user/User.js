import React from 'react'
import { Link } from 'react-router-dom'


export const User = ({ user }) => {
    
    const otherUser = user.id
    const activeUserId = parseInt(localStorage.getItem("ayg__id"))
    

if (otherUser === activeUserId) {

    return (
    
        <>
        <section className="user">
            <h4 className="user__name">
                
                <Link to={`/profile/${activeUserId}`}> {user.name}</Link>
    
            </h4>
        </section>
    </>
    )
    



} else {
    
    return (
    
    <>
    <section className="user">
        <h6 className="user__name">
            
            <Link to={`/profile/user/${user.id}`}> {user.name}</Link>

        </h6>
    </section>
</>
)
    }
}