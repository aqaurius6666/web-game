import React, { useState } from 'react'
import authenticationService from '../API/authentication_service'
import history from './history';

const Register = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const checkPass = () => {
        if (password === rePassword)
            return true;
        else { console.log("password not match") }
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        if (checkPass())
            authenticationService.register(userName, password)
            .then(() => {
                history.push('/login')
                window.location.reload()
            }
            )

    }
    return (
        <div className="base-contains">
            <div className="header">Register</div>
            <div className="content">
                <div className="form">
                    <form className="register-form" onSubmit={onSubmitForm}>
                        <div className="form-group">
                            <label htmlFor="username"> Username</label>
                            <input name="username" placeholder="username" onChange={(e) => setUserName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"> Password</label>
                            <input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="rePassword"> rePassword</label>
                            <input type="password" name="rePassword" placeholder="rePassword" onChange={(e) => setRePassword(e.target.value)} />
                        </div>
                        <div className="footer">
                            <button type="submit" className="btn">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <div className="footer">
                <button type="button" className="btn">
                    Register
                </button>
            </div> */}
        </div>
    );
}; export default Register