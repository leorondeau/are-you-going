import React from "react"
import { Redirect, Route } from "react-router-dom"
import { Register } from "./auth/Register"
import { Login } from "./auth/Login"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"




export const AreYouGoing = () => (
    <>
        <Route render={() => {
            // The user id is saved under the key app_user_id in local Storage. Change below if needed!
            if (localStorage.getItem("ayg__id")) {
                return (
                    <>
                        <Route render={props => <NavBar {...props} />} />
                        {/* <Route render={props => <ApplicationViews {...props} />} /> */}
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