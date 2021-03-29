const TagButton = (props) => {
    const {tag} = props
    return (
        <a className="btn btn-primary" href={`/tags/${tag.name}`}>{tag.name}</a>
    )
}; export default TagButton