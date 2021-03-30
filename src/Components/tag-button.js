const TagButton = (props) => {
    const {tag} = props
    return (
        <a className="tag-button btn" href={`/tags/${tag.name}`}>{tag.name}</a>
    )
}; export default TagButton