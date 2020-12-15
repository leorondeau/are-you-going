import React from 'react'
import { ActiveGoEventList } from './ActiveGoEventList'
import { ActiveUserList } from './ActiveUserList'
import { ActiveOwnList } from './ActiveOwnList'


export const Profile = () => {
return (
    <>
        < ActiveGoEventList />
        < ActiveUserList />
        < ActiveOwnList />
    </>
)
}

