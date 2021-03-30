import React, { useEffect, useState } from 'react'
import gameService from '../API/gameService'
import userService from '../API/userService'
import Loading from './loading'
import TableGame from './table-game'

const BrowserGame = (props) => {
    const { tag } = props
    const [user, setUser] = useState(Object)
    const [games, setGames] = useState(Array)
    const [tags, setTags] = useState(Array)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        let completed = 0
        let tasks = 3
        setLoading(true)
        function done() {
            if (++completed === tasks) setLoading(false)
        }
        userService.getUser().then(data => {
            setUser(data)
            done()
        })
        if (tag) {
            gameService.getGamesByTag(tag).then(data => {
                setGames(data)
                done()
            })
        } else {
            gameService.getGames().then(data => {
                setGames(data)
                done()
            })
        }
        gameService.getTags().then(data => {
            setTags(data)
            done()
        })
    }, [])
    if (loading) return <Loading />
    return (
        <TableGame tags={tags} games={games} />
    );
}; export default BrowserGame