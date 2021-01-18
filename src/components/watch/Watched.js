import React from 'react'
import { Link } from 'react-router-dom'

/* User name that is rendered in active users profile for people that the active user
is watching */

export const Watched = ({ user }) => {

    return (
        <>
            <section className="watch-list">
                <div className="watch-name">
                <Link to={`/profile/user/${user.id}`}> {user.name}</Link>
                </div>
            </section>
        </>
    )
}