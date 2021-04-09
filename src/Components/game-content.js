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
        <div className="row media-frame">
            <div className="col-md-9 col-sm-9">
                <iframe width="100%" height="500px" src={`https://www.youtube.com/embed/${data.ytl}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </div>
            <div className="game-info-frame col-md-3 col-sm-3">
                <GameInfo game={data} />
            </div>
        </div>
    )
}
export default GameContent