import React from 'react'
import { ActiveGoEventList } from './ActiveGoEventList'
import { ActiveUserList } from './ActiveUserList'
import { ActiveOwnList } from './ActiveOwnList'
import { WatchList } from '../watch/WatchList'
import './Profile.css'

export const Profile = () => {
return (
    <>
        < ActiveUserList />
        <div className="profile-wrapper">
            < ActiveGoEventList />
            < ActiveOwnList />
        </div>

        < WatchList />
    </>
)
}