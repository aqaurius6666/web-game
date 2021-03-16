import React from 'react'

const Register = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    return (
        <div className="base-contains">
            <div className="header">Register</div>
            <div className="content">
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username"> Username</label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"> Password</label>
                        <input type="text" name="password" placeholder="password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rePassword"> rePassword</label>
                        <input type="text" name="rePassword" placeholder="rePassword" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">
                    Register
          </button>
            </div>
        </div>
    );
}; export default Register