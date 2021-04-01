import TagButton from "./tag-button"

const TagCategory = (props) => {
    const { tags } = props
    const left = tags.slice(0, 5)
    const right = tags.slice(5, 10)
    return (
        <div className="tag-category">
            <div className="tag-category-header">Tag category:</div>
            <div className="row">
                <div className="col-lg-5 col-md-5">
                    {left.map((each, i) => { return <TagButton tag={each} /> })}
                </div>
                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-5 col-md-5">
                    {right.map((each, i) => { return <TagButton tag={each} /> })}
                </div>
            </div>
        </div>

    )
}; export default TagCategory