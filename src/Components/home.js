import React, { useEffect, useState } from 'react'
import {api_get} from './api'
export const Home = () => {
    const [data, setData] = useState()
    useEffect(() => {
        api_get()
    }, [])
    return (
        <div>
            It home
        </div>
    )
}