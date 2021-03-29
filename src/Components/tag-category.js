import { useEffect, useState } from "react"
import gameService from "../API/gameService"
import TagButton from "./tag-button"

const TagCategory = (props) => {
    const { tags } = props
    const left = tags.slice(0, 5)
    const right = tags.slice(5, 10)
    console.log(left)
    console.log(right)
    return (
        <div>
            Tag category:
            <div className="row">

                <div className="col-md-6">
                    {left.map((each, i) => { return <TagButton tag={each} /> })}
                </div>
                <div className="col-md-6">
                    {right.map((each, i) => { return <TagButton tag={each} /> })}
                </div>
            </div>
        </div>

    )
}; export default TagCategory