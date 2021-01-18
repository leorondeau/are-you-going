import React, { useEffect, useContext, useState } from 'react'
import { WatchListContext } from './WatchProvider'
import "./Watch.css"


/* Radio buttons that are rendered on users profile for cool, avoid or neutral */

export const WatchButton = (props) => {
    const { watch, addWatched, deleteWatched, getWatch, updateWatched } = useContext(WatchListContext)


    const activeUserId = parseInt(localStorage.getItem("ayg__id"))
    const profileUserId = parseInt(props.match.params.userId)

    const [watchedObj, setWatchedObj] = useState({})
    const [selectedWatched, setSelectedWatched] = useState([])
    const [selectedOption, setSelectedOption] = useState("neutral")

    useEffect(() => {
        getWatch()

    }, [])
    

    useEffect(() => {
        const watchListEvents = watch.filter(w => w.userId === activeUserId) || []
        setSelectedWatched(watchListEvents)

        const watchedUser = watchListEvents.find(wle => wle.watchedUserId === profileUserId) || {}
        setWatchedObj(watchedUser)
    }, [watch])


    useEffect(() => {

        if (watchedObj !== {} && watchedObj.watch === true) {
            setSelectedOption("cool")
        } else if (watchedObj !== {} && watchedObj.watch === false) {
            setSelectedOption("avoid")
        } else {
            setSelectedOption("neutral")
        }

    }, [watchedObj, watch])


    /* e properties are inherited from onChange prop in button */

    const watchStatus = (e) => {

        const userWatchStatus = e.target.value

        if (e.target.value === "cool") {
            if (watchedObj !== {} && watchedObj.watch === false) {
                updateWatched(
                    {
                        id: watchedObj.id,
                        userId: activeUserId,
                        watchedUserId: profileUserId,
                        watch: true
                    }
                )
            } else {
                addWatched(
                    {
                        userId: activeUserId,
                        watchedUserId: profileUserId,
                        watch: true
                    }
                )
            }
        }

        if (e.target.value === "avoid") {
            if (watchedObj !== {} && watchedObj.watch === true) {
                updateWatched(
                    {
                        id: watchedObj.id,
                        userId: activeUserId,
                        watchedUserId: profileUserId,
                        watch: false
                    }
                )
            } else {
                addWatched(
                    {
                        userId: activeUserId,
                        watchedUserId: profileUserId,
                        watch: false
                    }
                )
            }
        }
        
        if (e.target.value === "neutral") {
            deleteWatched(watchedObj.id)
        }
    }

    return (
        <>
            <h5 className="radio-header">Status</h5>
            <div className="radio-group">
                <label className="radio-cool">
                    <input type="radio"
                        name="watch"
                        value="cool"
                        checked={selectedOption === "cool"}
                        onChange={watchStatus}>
                    </input>
                cool
            </label>
                <label className="radio-avoid">
                    <input className="avoid-input" type="radio"
                        name="watch"
                        value="avoid"
                        checked={selectedOption === "avoid"}
                        onChange={watchStatus}>
                    </input>
                avoid
            </label>
                <label className="radio-neutral">
                    <input type="radio"
                        name="watch"
                        value="neutral"
                        checked={selectedOption === "neutral"}
                        onChange={watchStatus}>
                    </input>
                neutral
            </label>
            </div>
        </>
    )
}
