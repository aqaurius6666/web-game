import React, { useState } from 'react'
import authenticationService from '../API/authentication_service'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitForm = (e) => {
        e.preventDefault()
        authenticationService.login(username, password)
    }
    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <label>Username: </label>
                <input onChange={(e) => setUsername(e.target.value)}></input>
                <label>Password: </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
                <button type="submit" >Enter</button>
            </form>
        </div>
    )
}; export default Login