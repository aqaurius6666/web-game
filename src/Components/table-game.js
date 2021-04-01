import { useEffect, useState } from "react";
import gameService from "../API/gameService";
import Loading from "./loading";
import PaginationNav from "./pagination";
import { TabGame } from "./tab-game";
import TagCategory from "./tag-category";

const TableGame = (props) => {
    const { tags, games } = props
    const [currentGames, setCurrentGames] = useState(games)
    const [currentPage, setCurrentPage] = useState(0)
    const [loading, setLoading] = useState(true)
    const [pagination, setPagination] = useState()

    useEffect(() => {
        let completed = 0
        let task = 1
        setLoading(true)
        function done() {
            if (++completed === task) setLoading(false)
        }

        gameService.getGames(currentPage, 10).then(({ array, _pagination }) => {
            setCurrentGames(array)
            setCurrentPage(_pagination._page)
            setPagination(_pagination)
        }).finally(done)
    }

    }, [currentPage])

if (loading) return (<Loading />)
return (
    <div className="row ">
        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
            {currentGames.map((each, key) => {
                return (<TabGame game={each} />)
            })}
            <PaginationNav currentPage={currentPage} itemPerPage={pagination._limit} totalItem={pagination._total} pageRangeDisplayed={3} onChange={setCurrentPage} />
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
            <TagCategory tags={tags} />
        </div>
    </div>
)
}; export default TableGame
