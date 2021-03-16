import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
export const Home = () => {
    const [data, setData] = useState()
    return (
        <div>
            It home
        </div>
    )
=======
import userService from '../API/userService'

export const Home = () => {
    const [data, setData] = useState()
    useEffect(() => {
        userService.getUserValue().then(({username}) => setData(username))
    }, [])
    return (
        <div>
            It home, {data}.
        </div>
    );
>>>>>>> 8e08ff00031e4348cf6bf5ce99f6f02927edbb6d
}