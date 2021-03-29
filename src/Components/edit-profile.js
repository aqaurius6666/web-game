import { useState } from "react";
import authenticationService from "../API/authenticationService";
import userService from "../API/userService";

const EditProfile = () => {
    const [form, setForm] = useState({"password": String,
                                    "conf_password": String,
                                    "old_password": String})
    const handleSubmit = (e) => {
        e.preventDefault()
        userService.resetPassword(form).then(console.log)
        authenticationService.logout()
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>Old password:</div>
                <input type="password" placeholder onChange={(e) => setForm({...form, old_password : e.target.value})}></input>
                <div>New password:</div>
                <input type="password" placeholder onChange={(e) => setForm({...form, password : e.target.value})}></input>
                <div>Conf password:</div>
                <input type="password" placeholder onChange={(e) => setForm({...form, conf_password : e.target.value})}></input>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}; export default EditProfile