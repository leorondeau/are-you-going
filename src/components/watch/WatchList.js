import React, { useContext, useEffect, useState } from 'react'
import { WatchListContext } from './WatchProvider'
import { Watched } from './Watched'
import { UserContext } from '../user/UserProvider'
import Dropdown from 'react-bootstrap/Dropdown'

/* Lists the user names of the watched users in the active users profile under the Scene dropdown */

export const WatchList = (props) => {
    const { watch, getWatch } = useContext(WatchListContext)
    const { users, getUsers } = useContext(UserContext)
    const activeUserId = parseInt(localStorage.getItem("ayg__id"))


    const [watched, setWatched] = useState([])
    const [usersName, setUsersName] = useState([])


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

    }, [watch, users])

    if (usersName.length === 0) {
        return (

            <>
                <div className="drop-watch-menu" >
                    <Dropdown>
                        <Dropdown.Toggle className="dropdown-button">Scene</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item className="active-filler">
                                <p>{"Add users on their profile"}</p>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </>
        )
    } else {

        return (

            <>
                <div className="drop-watch-menu" >
                    <Dropdown>
                        <Dropdown.Toggle className="dropdown-button">Scene</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item className="active-menu">
                                {
                                    usersName.map(un => <Watched key={un.id} user={un} />)

                                }
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </>
        )
    }


}