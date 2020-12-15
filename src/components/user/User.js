import React from 'react'
import { Link } from 'react-router-dom'


export const User = ({ user }) => (
    // {console.log("USER" , user.name)}
    <section className="user">
        <h3 className="user__name">
            User: <Link to={`/profile/user/${user.id}`}> {user.name}</Link>

        </h3>
    </section>

)
