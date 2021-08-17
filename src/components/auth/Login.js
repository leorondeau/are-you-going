import React, { useRef } from "react"
import { Link } from "react-router-dom";
import "./Login.css"
import Button from 'react-bootstrap/Button'


export const Login = props => {
    const email = React.createRef()
    const password = React.createRef()
    const invalidDialog = React.createRef()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: email.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem("ayg_token", res.token)
                    props.history.push("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Email or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
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

