import { useEffect, useState } from "react"
import gameService from "../API/gameService"
import Loading from "./loading"
import TagCategory from "./tag-category"

const GameContent = (props) => {
    const { gid } = props
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        let completed = 0
        let tasks = 1
        setLoading(true)
        function done() {
            if (++completed === tasks) setLoading(false)
        }
        gameService.getGameByGid(gid).then(data => {
            setData(data)
            console.log(data)
            done()
        })
    }, [gid])
    if (loading) return <Loading />
    return (
        <div className="row">
            <div className="col-sm-9">
                <div>
                    Video
                        <video id="movie_256825205" playsinline="true" class="highlight_player_item highlight_movie" poster="https://cdn.akamai.steamstatic.com/steam/apps/256825205/movie.293x165.jpg?t=1615537106" preload="none" src="https://cdn.akamai.steamstatic.com/steam/apps/256825205/movie480_vp9.webm?t=1615537106" data-hd-src="https://cdn.akamai.steamstatic.com/steam/apps/256825205/movie_max_vp9.webm?t=1615537106"></video>
                </div>
                <div>
                    About this game
                    </div>
                <div>
                    System requirement
                    </div>
                <div>
                    More like this
                    </div>
                <div>
                    Comment
                    </div>
            </div>
            <TagCategory game_tags={data.tags}/>
        </div>
    )
}
export default GameContent