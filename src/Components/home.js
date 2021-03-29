import React, { useEffect, useState } from 'react'
import gameService from '../API/gameService'
import userService from '../API/userService'
import Loading from './loading'
import { TabGame } from './tab-game'

export const Home = () => {
    const [data, setData] = useState(Object)
    const [games, setGames] = useState(Array)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        let completed = 0
        let tasks = 2
        setLoading(true)
        function done() {
            if (++completed === tasks) setLoading(false)
        }
        userService.getUserValue().then(data => {
            setData(data)
            done()
        })
        gameService.getGames().then(data => {
            setGames(data)
            done()
        })
    }, [])
    if (loading) return <Loading />
    return (
        <div>
            It home, {data.username}.
            {games.map((data, key) => {
                return (
                    <TabGame game={data} />
                )
            })}
        </div>
    );
}