import { useEffect, useState } from "react";
import gameService from "../API/gameService";
import Loading from "./loading";
import TagButton from "./tag-button"

const TagCategory = (props) => {
    const { game_tags } = props
    const [tags, setTags] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        let completed = 0
        let task = 1
        setLoading(true)
        function done() {
            if (++completed === task) setLoading(false)
        }
        if (!game_tags) {
            gameService.getTags().then(data => {
                setTags(data)
            }).finally(done)
        } else {
            setTags(game_tags.map((each, i) => {
                return {
                    "name" : each
                }
            }))
            setLoading(false)
        }
    }, [game_tags])
    if (loading) return (<Loading/>)
    return (
        <div className="col-md-2">
            <div className="tag-category">
                <div className="tag-category-header">Tag category:</div>
                <div className="row">
                    <div className="col-lg-5 col-md-5">
                        {tags.slice(0, tags.length / 2).map((each, i) => { 
                            console.log(each)
                            return <TagButton tag={each} /> })}
                    </div>
                    <div className="col-lg-1 col-md-1"></div>
                    <div className="col-lg-5 col-md-5">
                        {tags.slice(tags.length / 2, tags.length).map((each, i) => { return <TagButton tag={each} /> })}
                    </div>
                </div>
            </div>
        </div>


    )
}; export default TagCategory