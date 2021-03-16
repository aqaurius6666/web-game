import React, { useState } from 'react'
import authenticationService from '../API/authentication_service'
<<<<<<< HEAD
=======
import history from './history';
>>>>>>> 8e08ff00031e4348cf6bf5ce99f6f02927edbb6d

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitForm = (e) => {
<<<<<<< HEAD
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
=======
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
>>>>>>> 8e08ff00031e4348cf6bf5ce99f6f02927edbb6d
            </form>
        </div>
    )
}; export default Login