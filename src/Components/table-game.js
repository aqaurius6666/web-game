import PaginationNav from "./pagination";
import { TabGame } from "./tab-game";
import TagCategory from "./tag-category";

const TableGame = (props) => {
    const { tags, games } = props
    return (
        <div className="container">
            <div className="row ">
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                    {games.map((each, key) => {
                        return (<TabGame game={each} />)
                    })}
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                    <TagCategory tags={tags} />
                </div>
            </div>
        </div>
    )
}; export default TableGame
