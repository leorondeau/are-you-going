import React , { useContext } from 'react'
import { WatchListContext} from './WatchProvider'



export const WatchButton = (props) => {
    const { addWatched } = useContext(WatchListContext)
    const userId = parseInt(localStorage.getItem("ayg__id"))

    const watchedUserId = parseInt(props.match.params.userId)
    
    console.log("watchedUserId" , watchedUserId)

    return (

        <>

            <button onClick={
                () => {
                    addWatched({
                        userId,
                        watchedUserId,
                        watch: true
                    })


                }
            }>Yah</button>

            <button onClick={
                () => {
                    addWatched({
                        userId,
                        watchedUserId,
                        watch: false
                    })

                }
            }>Nah</button>
        </>
    )
}