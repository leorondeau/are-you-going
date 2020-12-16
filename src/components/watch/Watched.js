import React from 'react'
import { Link } from 'react-router-dom'

export const Watch = ({ user }) => {

    return (
        <>
            <section className="watchList">
                <div className="watchName">
                <Link to={`/profile/user/${user.id}`}> {user.name}</Link>
                </div>
            </section>
        </>
    )
}
 