import React, { useEffect, useState } from 'react'
import authenticationService from '../API/authenticationService'
import history from './history';
import Loading from './loading';
import LoginInfo from './login-info';

const Login = () => {
    const [form, setForm] = useState({
        "username": String,
        "password": String
    })
    const [loading, setLoading] = useState(false)
    const onSubmitForm = (e) => {
        e.preventDefault();
        setLoading(true)
        authenticationService.login(form).then(() => {
            setLoading(false)
            history.push('/')
            window.location.reload()
        });
    }

    if (loading) return <Loading />

    return (
        <div className="border row login-frame">
            <form onSubmit={onSubmitForm} className="col-md-6 login-form">
                <div className="mb-3">
                    <label for="username" className="form-label">Username</label>
                    <input type="text" className="form-control"
                        id="username" aria-describedby="emailHelp" onChange={(e) => setForm({ ...form, username: e.target.value })}></input>
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control"
                        id="password" onChange={(e) => setForm({ ...form, password: e.target.value })}></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form >
            <div className="col-md-6">
                <br></br>
                <LoginInfo />
            </div>
        </div>
    )
}; export default Login