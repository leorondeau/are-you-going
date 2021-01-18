import React from 'react'
import { ActiveGoEventList } from './ActiveGoEventList'
import { ActiveUserList } from './ActiveUserList'
import { ActiveOwnList } from './ActiveOwnList'
import { WatchList } from '../watch/WatchList'
import './Profile.css'

/* Called in Application views and renders all elements for the active user on their profile page */

export const Profile = (props) => {
    return (
        <>
            <div className="profile-header">
                < ActiveUserList {...props} />
                < WatchList />
            </div>
            <div className="profile-wrapper">
                < ActiveOwnList />
                < ActiveGoEventList {...props} />
            </div>

        </>
    )
}