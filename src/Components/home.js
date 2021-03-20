import React, { useEffect, useState } from 'react'
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
}