import React from "react"
import { Redirect, Route } from "react-router-dom"
import { Register } from "./auth/Register"
import { Login } from "./auth/Login"




export const AreYouGoing = () => (    
    <>
    <Route render={() => {
        // The user id is saved under the key app_user_id in local Storage. Change below if needed!
        if (localStorage.getItem("app_user_id")) {
            return (
                <>
                        
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />
        
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
        </>
        )