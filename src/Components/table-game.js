import { useEffect, useState } from "react"
import gameService from "../API/gameService";
import Loading from "./loading";
import { TabGame } from "./tab-game";
import TagCategory from "./tag-category";

const TableGame = (props) => {
    const { tag } = props
    const [loading, setLoading] = useState(true)
    const [tags, setTags] = useState([])
    const [games, setGames] = useState([])
    useEffect(() => {
        let completed = 0
        let tasks = 1
        setLoading(true)
        function done() {
            if (++completed === tasks) setLoading(false)
        }
        gameService.getGamesByTag(tag).then(data => {
            setGames(data)
            console.log(data)
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
            <div className="row">
                <div className="col-sm-10">
                    {games.map((data, key) => {
                        return (
                            <TabGame game={data} />
                        )
                    })}
                </div>
                <div className="col-sm-2">
                    <TagCategory tags={tags} />
                </div>
            </div>

        </div>
    )
}; export default TableGame
