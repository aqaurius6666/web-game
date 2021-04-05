export const TabGame = (props) => {
    const { game } = props
    const url = `/games/${game.gid}`
    return (
        <div className="tab-game-frame">
            <a href={url} className="row">
                <img src={game.image} alt={`img_${game.name}`} className="col-sm-4" height="100px"></img>
                <div className="tab-game-content col-sm-8">
                    <div className="tab-game-name">
                        {game.name}
                    </div>
                    <div className="tab-game-details">
                        Tags:
                        {game.tags.map((tag, i) => {
                        if (i !== 0) {
                            return <span>, {tag}</span>
                        }
                        return <span> {tag}</span>
                    })}
                    </div>
                </div>
            </a>
        </div>

    )
}