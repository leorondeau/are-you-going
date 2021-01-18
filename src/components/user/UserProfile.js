import React from 'react'
import { UserGoEventList } from './UserGoEventList'
import { UserList } from './UserList'
import { WatchButton } from '../watch/WatchButton'

/* Called in Application views and renders all elements for the NON active user on their profile page */

export const UserProfile = (props) => {
return (
    <>
        < UserList {...props} />
        < UserGoEventList {...props} />
        < WatchButton {...props} />
        
    </>
)
}