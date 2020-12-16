import React from 'react'
import { Link } from 'react-router-dom'


export const User = ({ user }) => (
    
    <section className="user">
        <h4 className="user__name">
            <Link to={`/profile/user/${user.id}`}> {user.name}</Link>

        </h4>
    </section>

)
