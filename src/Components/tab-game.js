
export const TabGame = (props) => {
    const { game } = props
    return (
        <a href={game.link} className="row">
            <img src={game.image} alt={`img_${game.name}`} className="col-sm-4"></img>
            <div className="col-sm-8">
                <div>
                {game.name}
            </div>
                <div>
                    Tags:
                {game.tags.map((tag, i) => {
                    if (i !== 0) {
                        return <span>, {tag}</span>
                    }
                    return <span> {tag}</span>
                })}
                </div></div>

        </a>
    )
}