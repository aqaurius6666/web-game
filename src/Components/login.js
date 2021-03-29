import React, { useEffect, useState } from 'react'
import authenticationService from '../API/authenticationService'
import history from './history';
import Loading from './loading';

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const onSubmitForm = (e) => {
        e.preventDefault();
        setLoading(true)
        authenticationService.login(username, password).then(() => {
            setLoading(false)
            history.push('/')
            window.location.reload()
        });
    }

    if (loading) return <Loading />
    
    return (
        <>
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
        </>
        
    )
}; export default Login