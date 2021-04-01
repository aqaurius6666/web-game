import { useEffect, useState } from "react";
import gameService from "../API/gameService";
import Loading from "./loading";
import TagButton from "./tag-button"

const TagCategory = (props) => {
    const [tags, setTags] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        let completed = 0
        let task = 1
        setLoading(true)
        function done() {
            if (++completed === task) setLoading(false)
        }
        gameService.getTags().then(data => {
            setTags(data)
        }).finally(done)
    }, [])
    if (loading) return (<Loading/>)
    return (
        <div className="tag-category">
            <div className="tag-category-header">Tag category:</div>
            <div className="row">
                <div className="col-lg-5 col-md-5">
                    {tags.slice(0, 5).map((each, i) => { return <TagButton tag={each} /> })}
                </div>
                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-5 col-md-5">
                    {tags.slice(5, 10).map((each, i) => { return <TagButton tag={each} /> })}
                </div>
            </div>
        </div>

    )
}; export default TagCategory