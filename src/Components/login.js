import React, { useState } from 'react'
import authenticationService from '../API/authenticationService'
import history from './history';

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitForm = (e) => {
        e.preventDefault();
            authenticationService.login(username, password).then(() => {
                history.push('/')
                window.location.reload()
            });

    }

    return (
        <div>
            <form className="login-form" onSubmit={onSubmitForm}>
                <div className="form-group">
                    <label htmlFor="username"> Username</label>
                    <input name="username" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password"> Password</label>
                    <input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="footer">
                    <button type="submit" className="btn">
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}; export default Login