import { useEffect, useState } from "react";
import userService from "../API/userService";
import Loading from "./loading";

const User = () => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        let completed = 0
        let tasks = 1
        setLoading(true)
        function done() {
            if (++completed === tasks) setLoading(false)
        }
        userService.getUser().then(data => {
            setUser(data)
            console.log(data)
            done()
        })
    }, [])
    if (loading) return <Loading/>

    return (
        <>
            <div>
                Username {user.username}
            </div>
            <a href="/profile/edit">Edit</a>
        </>
    )
}; export default User