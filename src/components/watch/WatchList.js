import React, { useContext, useEffect, useState } from 'react'
import { WatchListContext } from './WatchProvider'
import { Watched } from './Watched'
import { UserContext } from '../user/UserProvider'



export const WatchList = (props) => {
    const { watch, getWatch } = useContext(WatchListContext)
    const { users, getUsers } = useContext(UserContext)
    const activeUserId = parseInt(localStorage.getItem("ayg__id"))


    const [watched, setWatched] = useState([])
    const [usersName , setUsersName] = useState([])

    
    useEffect(() => {
        
        getUsers()
        .then(getWatch)
    }, [])
    
    
    useEffect(() => {

        const watchedUsers = watch.filter(w => w.userId === activeUserId) || {}
        setWatched(watchedUsers)

        const watchNames = watchedUsers.map(wu => {
            return users.find(u => u.id === wu.watchedUserId) || {}
        })
        setUsersName(watchNames)
        
    }, [watch , users])

    

    return (
        
        <>
            <section>
                <h3>Tabs</h3>
                <h4>
                    {
                        usersName.map(un => <Watched key={un.id} user={un} />)
                    }
                </h4>
            </section>
        </>
    )
}
