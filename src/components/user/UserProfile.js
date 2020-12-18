import React from 'react'
import { UserGoEventList } from './UserGoEventList'
import { UserList } from './UserList'
import { WatchButton } from '../watch/WatchButton'



export const UserProfile = (props) => {
return (
    <>
        < UserList {...props} />
        < UserGoEventList {...props} />
        < WatchButton {...props} />
        
    </>
)
}