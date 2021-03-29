import React, { useEffect, useState } from 'react'
import gameService from '../API/gameService'
import userService from '../API/userService'
import Loading from './loading'
import { TabGame } from './tab-game'
import TagCategory from './tag-category'

export const Home = () => {
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
        gameService.getGames().then(data => {
            setGames(data)
            done()
        })
        gameService.getTags().then(data => {
            setTags(data)
            done()
        })
    }, [])
    if (loading) return <Loading />
    return (
        <div>
            It home, {user.username}.
            <div className="row">
                <div className="col-sm-10">
                    {games.map((data, key) => {
                        return (
                            <TabGame game={data} />
                        )
                    })}
                </div>
                <div className="col-sm-2">
                    <TagCategory tags={tags}/>
                </div>
            </div>

        </div>
    );
}