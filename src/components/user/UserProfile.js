import React from 'react'
import { UserGoEventList } from './UserGoEventList'
import { UserList } from './UserList'



export const UserProfile = (props) => {
return (
    <>
        < UserGoEventList {...props} />
        < UserList {...props}/>
        
    </>
)
}