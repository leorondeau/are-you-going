import React, { useRef } from "react"
import { Link } from "react-router-dom";
import "./Login.css"
import Button from 'react-bootstrap/Button'


export const Login = props => {
    const email = useRef()
    const password = useRef()
    const existDialog = useRef()
    const passwordDialog = useRef()

    const existingUserCheck = () => {
        // If your json-server URL is different, please change it below!
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(_ => _.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists && exists.password === password.current.value) {
                    // The user id is saved under the key app_user_id in local Storage. Change below if needed!
                    localStorage.setItem("ayg__id", exists.id)
                    props.history.push("/")
                } else if (exists && exists.password !== password.current.value) {
                    passwordDialog.current.showModal()
                } else if (!exists) {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>
            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Password does not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1 className="login-title">Are you going?</h1>
                    
                    <fieldset>
                        <label htmlFor="inputEmail" className="input-info"> Email address </label>
                        <input ref={email} type="email"
                            id="email"
                            className="form-control"
                            placeholder=""
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword" className="input-info"> Password </label>
                        <input ref={password} type="password"
                            id="password"
                            className="form-control"
                            placeholder=""
                            required />
                    </fieldset>
                    <fieldset>
                        <Button className="sign-button" type="submit">
                            Sign in
                        </Button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}

