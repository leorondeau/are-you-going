import React, { useEffect, useContext, useState } from 'react'
import { WatchListContext } from './WatchProvider'



export const WatchButton = (props) => {
    const { watch, addWatched, deleteWatched, getWatch } = useContext(WatchListContext)


    const activeUserId = parseInt(localStorage.getItem("ayg__id"))
    const profileUserId = parseInt(props.match.params.userId)

    const [watchedObj, setWatchedObj] = useState({})
    const [selectedWatched, setSelectedWatched] = useState([])

    useEffect(() => {
        getWatch()

    }, [])
    // console.log("watch", watch)

    useEffect(() => {
        const watchListEvents = watch.filter(w => w.userId === activeUserId) || []
        setSelectedWatched(watchListEvents)
        // console.log("watchListEvents", watchListEvents)
        const watchedUser = watchListEvents.find(wle => wle.watchedUserId === profileUserId) || {}
        setWatchedObj(watchedUser)
    }, [watch])
    
    // console.log("selectedWatch", selectedWatched)
    // console.log("watchedObj" , watchedObj)

    const watchStatus = (e) => {
        
        // cool avoid neutral
        const userWatchStatus = e.target.value

        if (activeUserId === watchedObj.userId && watchedObj.watchedUserId === profileUserId && userWatchStatus === "cool") {
            addWatched(
                {
                    userId: activeUserId,
                    watchedUserId: profileUserId,
                    watch: true
                }
            )
        }
        if (activeUserId === watchedObj.userId && watchedObj.watchedUserId === profileUserId && userWatchStatus === "avoid") {
            addWatched(
                {
                    userId: activeUserId,
                    watchedUserId: profileUserId,
                    watch: false
                }
            )
        }
        if (activeUserId === watchedObj.userId && watchedObj.watchedUserId === profileUserId && userWatchStatus === "neutral") {
            deleteWatched(watchedObj.id)
            // console.log("delete" , deleteWatched(watchedObj.id))
        }
    }



    return (

        <>
            <label>
                <input type="radio"
                    name="watch"
                    value="cool"

                    onChange={watchStatus}>
                </input>
                cool
            </label>
            <label>
                <input type="radio"
                    name="watch"
                    value="avoid"

                    onChange={watchStatus}>
                </input>
                avoid
            </label>
            <label>

                <input type="radio"
                    name="watch"
                    value="neutral"
                    onChange={watchStatus}>
                </input>
                neutral
            </label>
        </>
    )
}
