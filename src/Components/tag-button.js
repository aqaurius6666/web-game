const TagButton = (props) => {
    const {tag} = props
    return (
        <a className="tag-button d-inline-flex justify-content-center align-items-center btn" href={`/tags/${tag.name}`}>
                {tag.name}
        </a>
    )
}; export default TagButton