import { useEffect, useState } from "react"
import gameService from "../API/gameService"
import Loading from "./loading"

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
        <div className="container">
            <div className="row">
                <div className="col-sm-9">
                    {data.name}
             </div>
                <div className="col-sm-3">
                    <img src={data.image} alt='img' width="300" height="180"></img>
                </div>
            </div>
        </div>
    )
}
export default GameContent