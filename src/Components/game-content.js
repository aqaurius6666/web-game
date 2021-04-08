import { useEffect, useState } from "react"
import gameService from "../API/gameService"
import GameInfo from "./game-info"
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
            done()
        })
    }, [gid])
    if (loading) return <Loading />
    return (
        <div className="row">
            <div className="col-md-10 col-sm-10">
                <div>
                    <iframe width="90%" height="500px" src={`https://www.youtube.com/embed/${data.ytl}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
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
            <div className="col-md-2 col-sm-2">
                <GameInfo game={data} />
                <TagCategory game_tags={data.tags} />
            </div>

        </div>
    )
}
export default GameContent