import { useEffect, useState } from "react";
import gameService from "../API/gameService";
import Loading from "./loading";
import { TabGame } from "./tab-game";
import PaginationNav from "./pagination"

const TableGame = (props) => {
    const { tag, page } = props
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(page)
    const [pagination, setPagination] = useState({})
    useEffect(() => {
        let completed = 0
        let task = 1
        setLoading(true)
        function done() {
            if (++completed === task) setLoading(false)
        }
        if (tag) {
            gameService.getGamesByTag(currentPage, 10, tag).then(({ array, _pagination }) => {
                setGames(array)
                setPagination(_pagination)
            }).finally(done)
        } else {
            gameService.getGames(currentPage, 10).then(({ array, _pagination }) => {
                setGames(array)
                setPagination(_pagination)
            }).finally(done)
        }
    }, [tag, currentPage])
    if (loading) return (<Loading />)
    return (
        <div className="col">
            {games.map((each, key) => {
                return (<TabGame game={each} />)
            })}
            <div className="pagination-bar">
                <PaginationNav
                    currentPage={currentPage}
                    itemPerPage={pagination._limit}
                    totalItem={pagination._total}
                    pageRangeDisplayed={7}
                    onChange={setCurrentPage} />
            </div>

        </div>
    )
}; export default TableGame
