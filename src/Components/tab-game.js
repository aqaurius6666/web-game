export const TabGame = (props) => {
    const { game } = props
    return (
        <a href={game.link} className="tab-game">
            <div className="row">
                <img src={game.image} alt={`img_${game.name}`} className="col-sm-3"></img>
                <div className="col-sm-9">
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
            </div>

        </a>
    )
}